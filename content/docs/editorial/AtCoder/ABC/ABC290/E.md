---
linktitle: "E"
title: "ABC290-E 解説"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
draft: false
url: "docs/1676882511"
tags:
- # 問題のタグ
- # コンテストのタグ
cahegories:
- 解説
---

[問題のURL](https://atcoder.jp/contests/abc290/tasks/abc290_e)

## 問題概要
長さ$N$の数列$A$が与えられます。この数列の全ての連続部分文字列において、数列を回文にするために変更する必要のがある要素の個数の最小値を求め、それらの和を出力してください。

## 解法
どのような場合が答えに寄与するか考える。これは $A_i$と$A_j(i<j)$ が違い、かつそれらを対応付ける連続部分列が存在する場合である。$i, j$を固定した時、これらを対応付けるような連続部分列は $\min(i, N - j + 1)$ 個である。よって $A_i\neq A_j$ となるペア $(i, j)$ についてこれの和を求めればよい。
$i \leq N - j + 1$ の場合と$i > N - j + 1$ の場合に分けて考える。

$i \leq N - j + 1$ の時、$i$を固定して$j$を動かしてるように考えれば良く、「$A_{i+1}\sim A_{N-i+1}$ に含まれる $A_{i}$ と等しくない要素の個数」が分かれば良い。$A_i$を区間に含めても問題ないので、「$A_{i}\sim A_{N-i+1}$ に含まれる $A_{i}$ と等しくない要素の個数」を考える。これをするには外部に 
$$ cnt[i]=(現在考えている区間に含まれているiの個数)$$ 
という配列を用意する。なお、初めは区間を全体として初期化しておく。その上で$i$を昇順に見ていき、
1. 答えに $(N - 2 \times i + 2 - cnt[A[i]]) \times i$ を加算。
2. $cnt[A[i]]$ と $cnt[A[N - i + 1]]$ から$1$引く。
3. $i < \lfloor N / 2 \rfloor$ なら1. に戻る。そうでないなら終了。

とすればよい。要するに、区間$[i, N-i+1]$を考えた後、$i$番目と$N-i+1$番目の情報を削ることで区間$[i+1,N-i]$の情報に更新する、ということを繰り返している。

$i > N - j + 1$ は$j$を固定して$i$を動かしているように考えればよい。ここでは$j=N-i+1$としている。この場合も先ほど大体同じだが等号がついていないので、デクリメントのタイミングが先ほど少し違い、
1. $cnt[A[i]]$から$1$を引く。
2. 答えに $(N - 2 \times i + 1 - cnt[A[N - i + 1]]) \times i$ を加算。
3. $cnt[A[N - i + 1]]$ から$1$引く。
4. $i < \lfloor N / 2 \rfloor$ なら1. に戻る。そうでないなら終了。

となる。一番最初にデクリメントすることで考えている区間が$[i+1, N-i+1]$になる。

## コード

```cpp
#include<bits/stdc++.h>
using namespace std;
#define ll long long

int N, A[200010], cnt[200010];
int main() {
    int N;
    cin >> N;
    for (int i = 1; i <= N; i++) {
        cin >> A[i];
        cnt[A[i]]++;
    }

    ll ans = 0;
    for (int i = 1; i <= N / 2; i++) {
        ans += 1ll * (N - 2 * i + 2 - cnt[A[i]]) * i;
        cnt[A[i]]--, cnt[A[N - i + 1]]--;
    }

    for (int i = 1; i <= N; i++) cnt[i] = 0;
    for (int i = 1; i <= N; i++) cnt[A[i]]++;

    for (int i = 1; i <= N / 2; i++) {
        cnt[A[i]]--;
        ans += 1ll * (N - 2 * i + 1 - cnt[A[N - i + 1]]) * i;
        cnt[A[N - i + 1]]--;
    }

    cout << ans << "\n";
}
```
[Submission](https://atcoder.jp/contests/abc290/submissions/39064881)
## 備考

[ABC290 参加記]({{< ref "/docs/contests/AtCoder/ABC/ABC290/_index.md" >}})