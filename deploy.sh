#!/bin/sh
BUILD_DIR="../.theak_build"
if [ ! -d BUILD_DIR ]; then
  git clone https://github.com/theak/theak.github.io.git "$BUILD_DIR"
fi
npm run build
rm -rf "$BUILD_DIR"/static
cp -r build/ "$BUILD_DIR"
echo "To deploy your build:"
echo cd "$BUILD_DIR"
#npm run build build&&zip -r build/src.zip . -x node_modules/\\* -x DS_Store&&cd build&&git add -A&&git commit -m changes&&git pull&&git push origin master