#!/usr/bin/env sh
set -e
rm build/
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:PierreSchwang/intellectualsites-web.git master:gh-pages
cd -