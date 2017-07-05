#!/bin/bash

echo "Deploy for tag: '$1'";
if  [[ $1 =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]
then
    npm publish ./npm;
    npm run coveralls;
else
    npm publish ./npm --tag next;
fi

npm run github-release;
