#!/bin/bash

set -e

if [ -z "$1" ]
then
    echo "No commit message"
    exit 1
fi

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

cd "$DIR/front"
yarn build

cd "$DIR"
git add front
git commit -m "$1"
git subtree push --prefix front/dist origin gh-pages
