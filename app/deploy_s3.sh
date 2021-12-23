#!/bin/bash

[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use

[ ! -d "node_modules" ] && yarn install

yarn md
yarn run ts-node posts_edit.ts
yarn generate
yarn run gulp deploy
