# MyBlog

## markdown記事の反映手順

1. processmdによってmarkdownをjsonへ変換
Nuxt.jsプロジェクトのルートディレクトリにて
```shell
yarn md
```

2. jsonからブログ記事全体のsummaryを出力
Nuxt.jsプロジェクトのルートディレクトリにて
```shell
ts-node posts_edit.ts
```
