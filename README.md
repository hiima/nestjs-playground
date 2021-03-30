# これはなに

- NestJS + TypeORM で遊ぶ
- TypeORM はコードファーストかつマイグレーションベースで運用する

# Setup

```sh
# いつもの
yarn install

# PostgreSQL コンテナを起動 (port: 45432)
yarn db:build
yarn db:up

# src/migrations/*.ts の内容でマイグレーション
yarn typeorm:run

# NestJS 開発サーバを起動 (port: 4000)
yarn start:dev

# なにか返ってくる
curl --request GET --url http://localhost:4000/users
curl --request GET --url http://localhost:4000/articles
```

# マイグレーションについて

先にエンティティを実装して、それを元にマイグレーションファイルを生成する(コードファースト)

## 手順

1. `src/entities/` 配下に `<単数形のエンティティ名>.entity.ts` を実装
2. `yarn typeorm:migrate <任意のマイグレーションファイル名>` コマンドを実行して、マイグレーションファイルを生成
   - 現在の DB のスキーマと、エンティティとの差分を埋める形で、マイグレーションファイルが生成される
3. `yarn typeorm:run` コマンドを実行して、マイグレーションを実行

## エンティティ・DB スキーマの命名

- 普通にやるとエンティティに名付けた通りの命名でマイグレーションされてしまう
  - エンティティ名を単数形にすると、テーブル名も単数形になってしまう
    - テーブル名だけ複数形かつ snake_case にしたい
  - エンティティのフィールド名を camelCase にすると、カラム名も camelCase になってしまう
    - カラム名だけ snake_case にしたい
- エンティティで直接名前を指定して実装すれば良いのだけど面倒くさい
- `src/strategies/TypeOrmNamingStrategy.ts` で下記となるように制御
  - エンティティ
    - ファイル名、クラス名は単数
    - フィールド名は camelCase
  - 生成されるマイグレーションファイルでは、
    - テーブル名は複数形かつ snake_case
    - カラム名は snake_case
