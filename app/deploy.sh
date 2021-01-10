#!/bin/bash

# export AWS_ACCESS_KEY_ID="sample"
# export AWS_SECRET_ACCESS_KEY="sample"
# export AWS_BUCKET_NAME="sample"
# export AWS_CLOUDFRONT="sample"

[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use

[ ! -d "node_modules" ] && yarn install

yarn md
ts-node posts_edit.ts
yarn generate
yarn run gulp deploy
