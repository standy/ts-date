#!/bin/sh

echo "Deploy for tag: '$1'";
date +'%D %T %:z (%Z)'
node scripts/prepare-for-npm

if echo "$1" | grep -Eq "^v[0-9]+\.[0-9]+\.[0-9]+$"
then
    npm publish ./npm;
    npm run coveralls;
else
    npm publish ./npm --tag next;
fi

npm run github-release || true;
