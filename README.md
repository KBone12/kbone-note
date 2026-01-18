# kbone-note
A personal learning record site built with Hugo static site generator. / 個人的な学習メモサイトです。Hugoを使用して静的サイトを生成しています。

## Prerequisites / 必要な環境
The following tools must be installed to build this site / このサイトをビルドするには、以下のツールが必要です:
- [Hugo](https://gohugo.io/) (Extended version recommended / 拡張版推奨)
- [Node.js](https://nodejs.org/) and npm

## Setup / セットアップ
1. Clone the repository / リポジトリのクローン
```bash
git clone <repository-url>
cd kbone-note
```
2. Install dependencies / 依存パッケージのインストール
```bash
npm install
```

## Development / 開発

### Start development server / 開発サーバーの起動
```bash
hugo serve
```

By default, the site is accessible at `http://localhost:1313`. / デフォルトでは `http://localhost:1313` でサイトにアクセスできます。

### Creating new posts / 新しい記事の作成
```bash
hugo new posts/my-new-post.md
```

## Production Build / 本番ビルド
To generate static files for production, run / 本番用の静的ファイルを生成するには、以下のコマンドを実行します:
```bash
npm run build
```

Generated files will be output to the `public/` directory. Deploy the contents of this directory to your web server. / 生成されたファイルは `public/` ディレクトリに出力されます。このディレクトリの内容をウェブサーバーにデプロイしてください。

## License / ライセンス
This project uses a hybrid licensing approach / このプロジェクトはハイブリッドライセンスを採用しています:

* Learning records and educational content / 学習記録・教育コンテンツ: CC BY 4.0
* Code, scripts, and configuration files / コード・スクリプト・設定ファイル: MIT License

See the [LICENSE](LICENSE.md) file for details. / 詳細は [LICENSE](LICENSE.md) ファイルをご覧ください。
