#!/bin/sh

echo "Deploy for tag: '$1'";
date +'%D %T %:z (%Z)'
npm run build

if echo "$1" | grep -Eq "^v[0-9]+\.[0-9]+\.[0-9]+$"
then
    npm publish ./dist;
    npm run coveralls;
else
    npm publish ./dist --tag next;
fi

npm run github-release || true;
