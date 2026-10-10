import React, { Component } from 'react';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import MusicNote from 'material-ui/svg-icons/image/music-note';
import tracks from './beats.json';
import './Beats.css';

function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) seconds = 0;
  const s = Math.floor(seconds % 60);
  return Math.floor(seconds / 60) + ':' + (s < 10 ? '0' : '') + s;
}

function Art({track, size}) {
  if (track && track.art) {
    return <img className="beats-art" src={track.art} alt="" style={{width: size, height: size}}/>;
  }
  return (
    <div className="beats-art beats-art-empty" style={{width: size, height: size}}>
      <MusicNote color="#9E9E9E"/>
    </div>
  );
}

class Beats extends Component {
  constructor() {
    super();
    this.state = {index: 0, playing: false, loading: false, time: 0, duration: tracks[0].duration};
    this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.seek = this.seek.bind(this);
  }

  load(index) {
    // One <audio> element, nothing fetched until a track is played.
    this.audio.src = tracks[index].url;
    this.setState({index, time: 0, duration: tracks[index].duration});
    this.audio.play();
  }

  toggle(index) {
    if (index !== this.state.index || !this.audio.src) {
      this.load(index);
    } else if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  next() {
    this.load((this.state.index + 1) % tracks.length);
  }

  prev() {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    } else {
      this.load((this.state.index - 1 + tracks.length) % tracks.length);
    }
  }

  seek(e) {
    if (!this.audio.src) return;
    this.audio.currentTime = Number(e.target.value);
    this.setState({time: this.audio.currentTime});
  }

  render() {
    const {index, playing, loading, time, duration} = this.state;
    const current = tracks[index];
    const pct = duration ? Math.min(100, time / duration * 100) : 0;

    return (
      <div className="beats">
        <audio ref={(a) => { this.audio = a; }} preload="none"
            onPlay={() => this.setState({playing: true})}
            onPause={() => this.setState({playing: false})}
            onWaiting={() => this.setState({loading: true})}
            onPlaying={() => this.setState({loading: false})}
            onTimeUpdate={() => this.setState({time: this.audio.currentTime})}
            onLoadedMetadata={() => this.setState({duration: this.audio.duration})}
            onEnded={this.next}/>

        <div className="beats-now">
          <Art track={current} size={56}/>
          <div className="beats-now-main">
            <div className="beats-now-title">{current.title}</div>
            <div className="beats-seek">
              <span>{formatTime(time)}</span>
              <input type="range" min={0} max={duration || 0} step="any" value={time}
                  onChange={this.seek} aria-label="Seek"
                  style={{background: 'linear-gradient(to right, rgb(0, 188, 212) ' + pct + '%, #E0E0E0 ' + pct + '%)'}}/>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="beats-controls">
            <button onClick={this.prev} aria-label="Previous"><SkipPrevious/></button>
            <button className="beats-play" onClick={() => this.toggle(index)} aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? <Pause color="#FFF"/> : <PlayArrow color="#FFF"/>}
            </button>
            <button onClick={this.next} aria-label="Next"><SkipNext/></button>
          </div>
        </div>

        <div className="beats-list">
          {tracks.map((t, i) => {
            const active = i === index && this.audio && this.audio.src;
            return (
              <div key={t.id} className={'beats-row' + (active ? ' active' : '')} onClick={() => this.toggle(i)}>
                <div className="beats-row-art">
                  <Art track={t} size={40}/>
                  <div className="beats-row-overlay">
                    {active && playing ? <Pause color="#FFF"/> : <PlayArrow color="#FFF"/>}
                  </div>
                </div>
                <div className="beats-row-title">
                  {t.title}
                  {active && loading ? <span className="beats-loading"> loading…</span> : null}
                </div>
                <div className="beats-row-meta">{t.year} · {formatTime(t.duration)}</div>
              </div>
            );
          })}
        </div>
        <div className="beats-count">{tracks.length} tracks</div>
      </div>
    );
  }
}

export default Beats;
