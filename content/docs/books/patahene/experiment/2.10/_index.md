---
linktitle: "2.10"
title: "パタヘネ 2.10 : 32ビットの即値に関する実験"
weight: 1
# bookFlatSection: false
# bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
draft: true
url: "docs/1677917324"
tags:
- 
sitemap_ignore: true
---

## 疑問点
32ビットの即値は`lui`命令を用いて別のレジスタに記述するとあるが、その後に`add`を呼び出す話が載ってなくて不安になったので一応実験した。

### 実験方法

[このサイト](https://gcc.godbolt.org/)でC++のコードを好きなアセンブリにコンパイルしてくれる(言葉の使い方が合ってるのかわからん)。

今回は以下のようなコードを変換してもらった。なお、変換先としてmips gcc 12.2.0を指定した。
```cpp
void test() {
    int a = 10;
    int b = a + 100000000;
}
```
そして結果が以下
```txt
test():
        addiu   $sp,$sp,-24
        sw      $fp,20($sp)
        move    $fp,$sp
        li      $2,10                 # 0xa
        sw      $2,8($fp)
        lw      $3,8($fp)
        li      $2,99942400       # 0x5f50000
        ori     $2,$2,0xe100
        addu    $2,$3,$2
        sw      $2,12($fp)
        nop
        move    $sp,$fp
        lw      $fp,20($sp)
        addiu   $sp,$sp,24
        jr      $31
        nop
```
今回は`int b = a + 100000000;`に対応する部分だけ抜き出すと
```txt
        lw      $3,8($fp)
        li      $2,99942400       # 0x5f50000
        ori     $2,$2,0xe100
        addu    $2,$3,$2
        sw      $2,12($fp)
```
となっている。`li`命令は`lui`命令のシフトしていない版(多分)なので、これの二行目の部分は
```txt
        lui     $2,1525
```
と同じっぽい。プログラム上では即値の加算となっているが、確かに`lui`と`ori`を用いて別のレジスタに値を保存した上で`addu`を呼び出して加算していた。一方で、なんで`unsigned`なんだ？という疑問が残った。