#!/bin/sh

echo "Deploy for tag: '$1'";
date +'%D %T %:z (%Z)'
npm run build

if echo "$1" | grep -Eq "^v[0-9]+\.[0-9]+\.[0-9]+$"
then
    npm publish ./dist;
else
    npm publish ./dist --tag next;
fi
