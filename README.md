# 改善案

## home
`layouts\_default\home.html`をつくり、`content\_index.md`のfront matterで
```yml
type: home
```
とすることでhomeだけ特別な表示をする。
サイドバーを消して参加記と解説のリストを表示、トップには自己紹介文を書くくらいが一番簡単かな～と思った。

## code block

コードブロックとしてprism.jsを使うようにする。

## prism用shortcode

prism.jsのプラグインをうまく指定出来るようなshort codeを作成する。markdownで書く旨味である移植性の高さが消えないかが心配。

## ヘッダー

ヘッダーになんか加える

→ GitHubとかTwitterのリンク？

現在のページの状態を表示する。例えば`contests/Codeforces/div2+ECR/ECR143`にいるとしたら`contests > Codeforces > div2+ECR > ECR143`と表示する。
長くなった時が心配。

## 見出し
見出しを分かりやすくする
下線を付けたり、横に線を出す(border-left)など。
-> 一応やった。

## 引用
引用が見出しの強調方法とかぶってる。fontawesomeに引用マークがあったので、これを`::before`や`::after`を使って表示することで引用っぽさを上げるようにする。

## 目次

現在位置に合わせて目次の濃さを変える

## リンク

リンクに下線と手前にリンクマークを出す
→やった。

## 問い合わせ

memu sectionの下部に問い合わせ先を記載。
フッターでも良いかもしれない。

## edit page切り替え

解答などの編集や修正を望むコンテンツはGitHubに飛ぶように、そうでないものは飛ばないように変更できるようにする。Front Matterが多分使える

## libraryタブの作成

自作ライブラリのberifyページを作成する。
1. ライブラリ用のリポジトリを作成する(ライブラリはこちらで管理)

2. verify-helperを用いてページ作成

3. このページにsubmoduleとして取り込み, 成型する

という手順を考えている。

# 参加記や解説
参加記や解説のページに紹介文とカテゴリの記事リストを表示すると良いかも？

# 検索
タグ検索、カテゴリー検索を作る。なんなら検索用ページを作る。