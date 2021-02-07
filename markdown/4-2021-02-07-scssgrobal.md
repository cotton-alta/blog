---
id: 4
title: グローバルなScssをVueファイルの中で読み込む
created_at: 2021-02-07
updated_at: 2021-02-07
description: Scssのmixin使おうとしたらエラー吐かれた話
tags: Scss, Nuxt.js
---

## 問題
https://www.tam-tam.co.jp/tipsnote/html_css/post10708.html

上のサイトのようにメディアクエリをVueファイルの中で使用しようとすると以下のようなエラーが出てきました。環境はいつもの通りNuxt.jsです。

```shell
SassError: Undefined mixin.
```

どうやらmixinを定義したscssファイルの読み込みが上手くいってなかったらしいです。

## 対処法
```@nuxtjs/style-resources```を使用すれば解決します。

```shell
yarn add @nuxtjs/style-resources
```

```package.json```にはこれで追加されたので```nuxt.config.js```にも登録していきます。

```javascript
modules: [
	'@nuxtjs/style-resources'
]
```

グローバルに使用したいscssファイルを```styleResources```に登録します。今回はメディアクエリ呼び出しに関する処理を```variables.scss```という名前のファイルに記載したのでパスは以下のようになりました。

```javascript
styleResources: {
    scss: ["~assets/variables.scss"]
}
```

何番煎じの記事か分かったもんじゃないですが一応載せときます。
