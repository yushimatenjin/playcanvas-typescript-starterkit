## Installation

1. このリポジトリをgit cloneします。

```bash
```

2. yarn install.

```
cd リポジトリ名
yarn install
```

1. PlayCanvas公式からAPIキーを取得(https://playcanvas.com/account)し、コマンドを実行する。

- APIキーを入力
- プロジェクト名を入力
```
yarn playcanvas-cli init
```
すると`playcanvas.json`が出力される。 


4. GulpとWebPackのスクリプトをそれぞれ実行する

```
yarn watch:g
yarn watch:w
```
