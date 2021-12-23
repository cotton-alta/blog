#!/bin/bash

git config user.name $GITHUB_NAME
git config user.email $GITHUB_EMAIL

[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use

[ ! -d "node_modules" ] && yarn install

yarn md
yarn run ts-node posts_edit.ts
yarn generate
yarn deploy:gh-pages
