# Sharemon

Sharemon はユーザー全員で共通のキャラクターを育成する Web アプリです。

## 開発環境

### パッケージ管理

- npm
- Homebrew

### フロントエンド

- React
- Vite
- JavaScript

### バックエンド

- Node.js
- Express
- Postgres
- Knex

### デプロイ

- Render

### 認証

- Firebase Authentication

### その他ライブラリなど

- React Router v7
- nodemon
- dotenv

## 環境構築

git clone してから以下の手順を実行

Node.js をインストール

[Node.js](https://nodejs.org/ja/download)

```
# プロジェクトのルートでパッケージインストール
npm install

# フロントに移動してパッケージインストール
cd front
npm install
```

Postgres データベース作成

```
# Homebrewが入っていない場合はインストール
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# postgres を入れていない場合はインストール
brew install postgresql

# データベース作成
createdb [任意のデータベース名]
```

[Homebrew](https://brew.sh/ja/)

[PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew)

フロント側で`.env`を作成

```
touch .env
```

[公式ドキュメント](https://firebase.google.com/docs/auth/web/start?hl=ja)に従って [Firebase プロジェクトを作成](https://firebase.google.com/docs/web/setup?hl=ja#add-sdk-and-initialize)して Firebase Authentication を設定

フロントの`.env`に環境変数を設定

```
VITE_FIREBASE_API_KEY=[Firebaseプロジェクトからコピー]
VITE_FIREBASE_AUTH_DOMAIN=[Firebaseプロジェクトからコピー]
VITE_FIREBASE_PROJECT_ID=[Firebaseプロジェクトからコピー]
VITE_FIREBASE_STORAGE_BUCKET=[Firebaseプロジェクトからコピー]
VITE_FIREBASE_MESSAGE_SENDER_ID=[Firebaseプロジェクトからコピー]
VITE_FIREBASE_APP_ID=[Firebaseプロジェクトからコピー]
```

プロジェクトのルートに `.env`ファイルを作成

```
cd ../
touch .env
```

バックエンドの`.env`に環境変数を設定

```
DB_USER=[任意のユーザー名]
DB_NAME=[データベース名]
```

ホットリロード使用のため、フロントエンドとバックエンド両方でサーバーを起動

```
# プロジェクトのルートと/frontディレクトリで以下コマンドを実行
npm run dev
```

データベースのマイグレーションとシードを実行

```
npm run migrate-latest
npm run seed-data
```

## ディレクトリ構成

```
.
├── .env
├── .gitignore
├── front
│   ├── .env.local
│   ├── .gitignore
│   ├── dist
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── README.md
│   ├── src
│   └── vite.config.js
├── knexfile.js
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   ├── babu.jpg
│   ├── index.html
│   ├── kinoko.jpg
│   └── wata.jpg
├── README.md
└── src
    ├── app.js
    ├── db
    ├── modules
    └── server.js
```

## デプロイ

1. [Render.com](https://render.com/)で Web Service を作成

   この時、GitHub のリポジトリを Credentials -> Configure in GitHub から選択

2. Render.com で Add new から Postgres を作成

| 設定           | 入力           |
| -------------- | -------------- |
| Name           | プロジェクト名 |
| Language       | Node           |
| Branch         | main           |
| Region         | 近い場所       |
| Root Directory | 空欄           |
| Build Command  | npm run build  |
| Start Command  | npm start      |

3. Render.com で環境変数を追加

- Postgres の info -> Connections -> Internal Database URL をコピー
- プロジェクトの Environment Variables に以下の環境変数を追加

  | Key          | Value                            |
  | ------------ | -------------------------------- |
  | DATABASE_URL | コピーした Internal Database URL |
  | NODE_ENV     | production                       |

  その他、フロントの`.env`で設定した Firebase の環境変数を追加

## 今後の開発計画

- 育成ログの表示
- 育成ログのリアルタイム更新
- 育成貢献度のランキング表示
- 育成アイテム配布機能
- 育成アイテム獲得ミッション
- 登録メールアドレス変更
- キャラクターによるミッション
- キャラクター毎の特性追加
- レベルによる進化
- ログイン中の他のユーザー表示
