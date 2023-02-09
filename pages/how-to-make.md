---
layout: page
title: サイトの構成
---

---

## 概要
このサイトをどのようにつくったかを記します。細かい部分も書くと量が増えちゃうので特に手こづった部分に絞って記したいと思います。

### jekyllについて
[公式ドキュメント](http://jekyllrb-ja.github.io/)がとても優しいです。これをみてjekyllのファイル構成やsass、jsの弄り方を勉強してました。

### サイドバーについて
サイドバーは`flex`を使って`main-content`と`side-content`の二つを横に並べています。スマホで見た場合はサイドバーが表示されず、目次が一番上に表示される良いにしています。そのままだと窮屈な感じなっていたので、`\_sass\minima.sass`の`$content-width`の部分を`900px`から`1400px`に変更しました。今は目次を表示するだけですが、そのうちページ一覧やポスト一覧を折りたたみ形式で配置し、スクロールした際は目次だけついてくる感じにしたいと思ってます。

あと、スクロールバーが表示されるか否かで微妙にずれが発生し、ヘッダーがガタついていたので`\_sass\minima.sass`に
```css
body {
  overflow-y: scroll;
}
```
を追加してガタつかないようにしました。

### コードブロックについて
[Prism](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript)を使いました。プラグインは`Line Numbers`や`Show Language`などを入れています。本当は`Toolbar`をうまく使って綺麗に表示したかったんですが、うまくできなかったので一旦保留にしました。
以下に導入したプラグインのリストです。
- Line Highlight
- Autolinker
- Show Language
- inlinecolor
- Toolbar
- Match barces
- Diff Highlight
- Treeview

入れるだけいれて使ってないものもあります。Prismの導入については[Prism.js 使ってみた(Qiita)](https://qiita.com/taqumo/items/825c862517ba9d8567a1)を参考しました。[ここ](https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+bison+brainfuck+c+cpp+css-extras+diff+git+java+json+json5+latex+nginx+ocaml+perl+prolog+python+ruby+yaml&plugins=line-highlight+line-numbers+autolinker+show-language+inline-color+toolbar+match-braces+diff-highlight+treeview)から僕が使ってるやつと~~同じ構成のprismがDL出来ます。~~ 最初は配布されている物を使うつもりだったんですが、`TOMORROW NIGHT`をベースにインラインコードブロックだけ少し弄りました。ベースは`TOMORROW NIGHT`です。以下がサンプルコードブロックです。

```diff
- 減った
+ 増えた
```
```cpp
// カーソルを合わせると右上にC++と出ます
#icnlude<iostream>
int main() {
    cout << "Hello world\n";
    return 0;
}
```
```diff-cpp
// カーソルを合わせると右上にC++と出ます
#icnlude<iostream>
int main() {
-    cout << "Hello world\n";
+    cout << "Hello world << endl;
    return 0;
}
```

```cpp
// 括弧にカーソルを合わせると対応する括弧が強調表示されます
((()))
```