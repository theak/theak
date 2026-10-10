#!/usr/bin/env python3
"""Refresh the beats player data from the public ak_soundcloud GCS bucket.

The bucket has no CORS config, so the site can't fetch manifest.json at
runtime. This copies the tracks we want into src/beats.json and makes small
cover thumbnails in public/beats/ (the originals are up to several MB each).

Usage (from the repo root): python3 scripts/update-beats.py
Requires Pillow.
"""
import io
import json
import os
import urllib.request

from PIL import Image

MANIFEST_URL = 'https://storage.googleapis.com/ak_soundcloud/manifest.json'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(ROOT, 'src', 'beats.json')
ART_DIR = os.path.join(ROOT, 'public', 'beats')
THUMB_PX = 112

# Not beats: a radio spot. Voice memos ("Sounds from ...") are skipped by title.
EXCLUDED_IDS = {218857082}  # Asparagus Forest - BMIR Spot


def fetch(url):
    with urllib.request.urlopen(url) as resp:
        return resp.read()


def keep(track):
    return (track.get('stream_url')
            and not track['title'].startswith('Sounds from')
            and track['soundcloud_id'] not in EXCLUDED_IDS)


def main():
    manifest = json.loads(fetch(MANIFEST_URL))
    os.makedirs(ART_DIR, exist_ok=True)

    tracks = []
    for t in manifest['tracks']:
        if not keep(t):
            continue
        # Only ever stream MP3s, never the WAV originals.
        assert t['stream_url'].endswith('.mp3'), t['title']

        art = None
        if t.get('artwork_url'):
            name = '%d.jpg' % t['soundcloud_id']
            img = Image.open(io.BytesIO(fetch(t['artwork_url']))).convert('RGB')
            img.thumbnail((THUMB_PX, THUMB_PX), Image.LANCZOS)
            img.save(os.path.join(ART_DIR, name), quality=82, optimize=True)
            art = '/beats/' + name

        tracks.append({
            'id': t['soundcloud_id'],
            'title': t['title'].strip(),
            'year': t['uploaded_at'][:4],
            'duration': round(t['duration_seconds']),
            'url': t['stream_url'],
            'art': art,
            'plays': (t.get('stats_at_archive') or {}).get('plays') or 0,
            'uploaded_at': t['uploaded_at'],
        })

    # Tracks with cover art first, then most played, then newest.
    tracks.sort(key=lambda t: t['uploaded_at'], reverse=True)
    tracks.sort(key=lambda t: (t['art'] is None, -t['plays']))
    for t in tracks:
        del t['plays'], t['uploaded_at']
    with open(DATA_FILE, 'w') as f:
        json.dump(tracks, f, indent=1, ensure_ascii=False)
        f.write('\n')
    print('Wrote %d tracks to %s' % (len(tracks), DATA_FILE))


if __name__ == '__main__':
    main()
