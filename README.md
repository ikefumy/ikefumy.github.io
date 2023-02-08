# 概要
パタヘネの自分の解答とかをまとめたい
# ローカルでのテスト方法(個人的なメモ)
以下でjekyllの新規サイトを作成
```
bundle exec jekyll new . --force
```
Gemfileの以下のコメントアウトを外す
```
#gem "github-pages", group: :jekyll_plugins
```
以下で動かす
```
bundle exec jekyll serve
```