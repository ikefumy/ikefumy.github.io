
本来homeを表示する場所なんですが、なにもできていないのでToDoリストとして使います。

## 案
# 改善案

## home
`layouts\_default\home.html`をつくり、`content\_index.md`のfront matterで
```yml
type: home
```
とすることでhomeだけ特別な表示をする。

## code block

コードブロックとしてprism.jsを使うようにする。

## prism用shortcode

prism.jsのプラグインをうまく指定出来るようなshort codeを作成する。markdownで書く旨味である移植性の高さが消えないかが心配。

## ヘッダー

ヘッダーになんか加える

→ GitHubとかTwitterのリンク？

## 見出し
見出しを分かりやすくする
下線を付けたり、横に線を出す(border-left)など。

## 目次

現在位置に合わせて目次の濃さを変える

## リンク

リンクに下線と手前にリンクマークを出す

## 問い合わせ

memu sectionの下部に問い合わせ先を記載。

## edit page切り替え

解答などの編集や修正を望むコンテンツはGitHubに飛ぶように、そうでないものは飛ばないように変更できるようにする。Front Matterが多分使える

## libraryタブの作成

自作ライブラリのberifyページを作成する。
1. ライブラリ用のリポジトリを作成する(ライブラリはこちらで管理)

2. verify-helperを用いてページ作成

3. このページにsubmoduleとして取り込み, 成型する

という手順を考えている。