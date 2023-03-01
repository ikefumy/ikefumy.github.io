---
linktitle: "ECR144"
title: "ECR144 参加記"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
url: "docs/1677606331"
tags:
- ECR144
- ECR
categories:
- 参加記
---

## 結果

あったので出た。

![結果](result.png)

まあまあの出来。

[コンテストのURL](https://codeforces.com/contest/1796/my)

## 振り返り

### A
事前に適当な長さだけFB-stringを作って与えられた文字列がこれの部分列か見ればいいだけ。最初$30$までのFB-stringを作って提出したら長さが足りなくてペナが出た。

### B

編集距離みたいにやったあと復元かな、と思ってDPするところまで書いて、嘘であることに気づいた。最大共通部分列を取ってくるのが最適とは限らない。よく考えたら先頭が一致してたらそれ以降を`*`、末尾が一致してたらそれ以前を`*`、どちらでもないなら共通する長さ $2$ の連続部分文字列があるならそれの前後に`*`、そうでないなら作れない。
### C

なにこれ？集合内で自分の次に大きい要素はそいつで割り切れて、逆にそうなっているならbeautifulな集合になっている。よって $l\times 2^k \leq r$ を満たす最大の $k$ を取ってくるとこれがサイズの方の答えになる。またこれが集合の最大の要素を最小の要素で割った時の商になっている。あとは $3 \times 2^{k-1}$ の場合も考えればよい。$2$ の代わりに $4, 5, ... $ を使うことは絶対にできないのでこれで十分。例えば $2$ の代わりに $4$ をかけれるならサイズを $1$ 増やせるはず。これ絶対 $998244353$ こえなくね？って思ってしばらく確認してたけど、これで合ってそう。一応modint使って提出したらWAがでた。やっぱり考察ミスか？と思って考察し直したけどヤバい所は無さそう。実装ををも直したら最大が最少の $3 \times 2^{k-1}$ 倍となる場合の計算において場合によっては答えが負になるような実装をしていた。これを直してAC。
### D

大変だった。$i$ 番目を右端として、$i-k+1\sim i$ が左端となる場合を愚直に探索する。 左端が $i-k$ 以下となる場合はセグ木で対応すればよい。セグ木には $\displaystyle\sum_{k=0}^{i}a[i]-x\times i$ を入れておけばよい。$x$ が負の場合もこれで良いと思ってサンプル入れたら最後のケース ( $x$ が負の場合) だけ落ちた。もう一回考えたら確かに全然ダメだった。しょうが無いので負の場合も場合分けして実装する。
$x$ が負の場合はとりあえず 右端を $i$ として、もしも $n-i \geq k$ なら 区間の全てに $|x|$ を加算することができる。よって左端を好きに決めてよい。この計算は先ほどと同じようにできる。$n-i<k$ となるような $i$ は　$k-1$ 個で $k\leq 20$ なので、このような $i$ に関しては左端を全探索する。区間内で $+x$ されるような要素の数が最少になるようにすればよい。結構バグを埋め込んでしまったが、幸い提出前に全て修正でき、一発でAC出来た。
### E

二分探索で長さ決め打って木DPって方針で実装してた。部分木に根がある場合とで場合分けしながら木DPするような実装して5分前くらいに提出したけどWA。細かい部分での場合分けが多すぎた。何回か修正して提出して...を繰り返していたらコンテストが終わった。

## 感想
BでDP復元を書ききる前嘘に気付いたのは良かった。できれば書き始める前に嘘と気付きたい。Cみたいな問題、混乱するので $998244353$ とか書かないでほしい。答えが大きくなる可能性があるので～のとこ、嘘じゃないか？って思ったけどその値が大きいか大きくないかは悪魔でも主観なのでOK！みたいな理屈なのかもしれない。Dはめんどくさい実装をしてしまったので大分大変だった。今考えると累積minが欲しいのでセグ木いらない気がしてきた。upsolveのときに確認する。EはTLで全方位木DPと言われているのをみて、そっか～ってなった。全方位木なぜか考えてなかった。自分でも謎。Eを書いてる時「これ絶対めんどくさいしバグらせるだろ」って思いながら実装してたしもうちょっと考察するべきだった。FのAC数が0人のままおわったの怖すぎる。次のECRは2桁順位とりたい。

## upsolve
そのうちやります。