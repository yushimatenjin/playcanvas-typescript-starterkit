PlayCanvasでTypeScriptを使用するためのリポジトリです。
Visial Studio Codeなどで記述したコードをREST API経由でPlayCanvasのプロジェクトへアップロードします。

## Installation

1. このリポジトリをgit cloneします。

```bash
git clone git@github.com:yushimatenjin/playcanvas-typescript-starterkit.git
```

2. yarn install.

```bash
cd playcanvas-typescript-starterkit
yarn install
```

3. PlayCanvas公式からAPIキーを取得(https://playcanvas.com/account)し、コマンドを実行する。

```bash
yarn playcanvas-cli init
```

すると`playcanvas.json`が出力されます。

4. GulpとWebPackのスクリプトをそれぞれ実行する

```bash
yarn watch:g
yarn watch:w
```
