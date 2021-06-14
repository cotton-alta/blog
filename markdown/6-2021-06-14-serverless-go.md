---
id: 6
title: GoでServerless Framework入門
created_at: 2021-06-14
updated_at: 2021-06-14
description: AWSのLambda、API Gatewayを使ってAPIを生やそうとした際、Serverless Frameworkに入門したお話
tags: Go, Serverless Framework, AWS, Lambda, Amazon API Gateway
---

## はじめに

今回の記事はAWSのLambda、Amazon API Gatewayを使ってAPIを生やそうとした際、Serverless Frameworkに入門した記録です。Serverless Frameworkとはサーバレスアプリケーションの構築、デプロイを手軽に行えるようにするためのNode.js製のフレームワークです。今回はAWSを使用しますが、AzureやGCP等のクラウドサービスにも対応しています。

この記事では、Serverless Frameworkを導入し、Goの基本的なアプリケーションをAWSへデプロイするところまで行います。

## 事前準備

Serverless Frameworkを導入するにはnpmが必要となるので事前にインストールしておく必要があります。また、今回のようにAWSを使用する場合はAWS CLIも事前に導入しておく必要があります。

AWS CLIの導入が終わったら、AWSコンソールにて`AdministratorAccess`ポリシーを付与したIAMユーザを事前に作成し、以下のように`~/.aws/credentials`に追記しておきます。

```bash
[profile名]
aws_access_key_id = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 導入

事前準備が完了したら、Serverless Frameworkのインストールを行います。

まず、Serverless Frameworkで用意されているテンプレートを元にプロジェクトを作成します。今回はパッケージ管理に`go module`を使用するため、テンプレートに`aws-go-mod`を指定します。

AWS上でGoを使用するテンプレートは以下の3つが提供されています。

- aws-go
- aws-go-dep
- aws-go-mod ← 今回使う

それ以外のテンプレートはリファレンスの以下のページにまとめられています。

[https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/](https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/)

テンプレートからプロジェクトを作成した後、`make`を使用して実行ファイルを作成しますが、Windows環境では標準でmakeが使えません。Windows環境の方は以下の記事にて導入方法が紹介されていますので、こちらを参考にしつつmakeを導入しておきましょう。

[https://qiita.com/tokikaze0604/items/e13c04192762f8d4ec85](https://qiita.com/tokikaze0604/items/e13c04192762f8d4ec85)

（`serverless`のエイリアスとして`sls`が登録されているので以降はこちらを使用します。）

```bash
sls create -t aws-go-mod -p <project名>

cd <project名>

make build
```

以下のコマンドでデプロイを行います。

```bash
sls deploy --aws-profile <profile名>
```

sls createにて生成されたディレクトリに`serverless.yml`というファイルがあるかと思いますが、そのファイル中で以下のような記述があるはずです。ここではどのエンドポイントにアクセスしたらどのLambda関数が呼び出されるのかということが定義してあります。

```yaml
functions:
  create_point:
    handler: bin/create_point
    events:
      - http:
          path: /points
          method: post
  hello:
    handler: bin/hello
    events:
      - http:
          path: /hello
          method: get
```

次のコマンドで上記のLambda関数のデプロイが正常に行われているかチェックしましょう。ここではhelloを呼び出してみます。

```bash
serverless invoke -f hello
```

デプロイが正常に完了していれば以下のように出力が行われます。

```json
{
    "statusCode": 200,
    "headers": {
        "Content-Type": "application/json",
        "X-MyCompany-Func-Reply": "hello-handler"
    },
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\"}"
}
```

デプロイとLambda関数の実行まで行えたので、本編はここまでとなります。余裕があれば、Amazon API Gatewayで作成されたエンドポイントにも直接アクセスして確認してみましょう。

## 余談

今回の記事では導入までしか行いませんでしたが、今後、データの保存のためDynamoDB等の別サービスと連携を行う機会があると思います。その場合に気を付けることを余談として少しだけ書いておきます。

まず1点目、以下の記事でも紹介されているように`sls`にてデプロイを行ったアプリケーションに関しては、ローカルのIAMロールが適用されるのではなく、`Cloud Watch Logs`への読み書き権限しか付与されません。

[https://pyteyon.hatenablog.com/entry/2019/08/08/224047#AWS-Lambda-に登録した関数の権限エラー](https://pyteyon.hatenablog.com/entry/2019/08/08/224047#AWS-Lambda-%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%97%E3%81%9F%E9%96%A2%E6%95%B0%E3%81%AE%E6%A8%A9%E9%99%90%E3%82%A8%E3%83%A9%E3%83%BC)

[https://www.serverless.com/framework/docs/providers/aws/guide/iam/](https://www.serverless.com/framework/docs/providers/aws/guide/iam/)

そのため、DynamoDB等別サービスと連携させる際は、`serverless.yml`へポリシーを追加しておく必要があります。`serverless.yml`の`provider`を以下のように書き換えてポリシーを2つほど加えます。

```yaml
provider:
  （略）
  iam:
    role:
      managedPolicies:
        - 'arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess'
        - 'arn:aws:iam::aws:policy/service-role/AWSLambdaDynamoDBExecutionRole'
```

上記のポリシーはDynamoDBと連携させる際の例ですので、また他のサービスと連携を行う際はその都度必要なポリシーに書き換えてる必要があります。

最後にもう一点、これも詰まるポイントかもしれませんが、記事にしてくださっている方がいたので、自分は時間を掛けずに済みました。ここで紹介しておきます。

その記事とは以下のモノですが、`serverless.yml`に`integration: lambda`を記載してはいけないという事が書いてありました。これを書いてしまうとHandlerの中まで処理が到達しません。

[https://note.com/mueditech/n/n4e3f67fa68a0](https://note.com/mueditech/n/n4e3f67fa68a0)

## 終わりに

忘れないうちに書こうと思って書き殴った内容となっているので、文章がおかしいところがあるかもしれません。時間があるときに直しておきます。

## 参考記事

[https://www.serverless.com/blog/framework-example-golang-lambda-support](https://www.serverless.com/blog/framework-example-golang-lambda-support)

[https://serverless.co.jp/blog/25/](https://serverless.co.jp/blog/25/)

[https://kdnakt.hatenablog.com/entry/2018/08/01/080000](https://kdnakt.hatenablog.com/entry/2018/08/01/080000)