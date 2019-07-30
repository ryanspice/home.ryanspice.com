#!/bin/bash

touch yarn.lock

#!/bin/bashdocker build . -t home.ryanspice.comdocker run --rm --entrypoint cat home.ryanspice.com:latest /tmp/yarn.lock > /tmp/yarn.lock
if ! diff -q yarn.lock /tmp/yarn.lock > /dev/null  2>&1; then
  echo "We have a new yarn.lock"
  cp /tmp/yarn.lock yarn.lock
fi


# Init empty cache file
if [ ! -f .yarn-cache.tgz ]; then
  echo "Init empty .yarn-cache.tgz"
  tar cvzf .yarn-cache.tgz --files-from /dev/null
fi

docker build . -t home.ryanspice.com

docker run --rm --entrypoint cat home.ryanspice.com:latest /tmp/yarn.lock > /tmp/yarn.lock
if ! diff -q yarn.lock /tmp/yarn.lock > /dev/null  2>&1; then
  echo "Saving Yarn cache"
  docker run --rm --entrypoint tar home.ryanspice.com:latest czf - /root/.yarn-cache/ > .yarn-cache.tgz
  echo "Saving yarn.lock"
  cp /tmp/yarn.lock yarn.lock
fi
