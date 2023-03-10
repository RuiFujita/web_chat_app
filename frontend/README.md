# frontend
コンポーネントの描画やボタンクリック時の処理などを行う。
バックエンドと通信して、チャット機能を実現している。

# Requirement
* @types/react 18.0.27
* @types/react-dom 18.0.10
* @types/react-router-dom 5.3.3
* axios 1.3.1
* react 18.2.0
* react-dom 18.2.0
* react-router-dom 6.7.0
* react-scripts 5.0.1
* socket.io-client 4.6.0
* typescript 4.9.4
* web-vitals 2.1.4

# Installation
Visual Studio Codeのターミナルを開きます。(ctrl+shift+@)<br>
ターミナル上で以下のコマンドを順に実行します。
```
cd .\backend\ 
npm ci
```
npm ciが失敗した場合は
```
npm install
```
を実行してインストールして下さい。<br>
しばらくすると必要なモジュールのインストールが完了します.

# Usage
Installationに続いて、ターミナル上で以下のコマンドを実行します。<br>
```
npm start
```
index.tsxが実行され、ブラウザが起動してlocalhost:3000にアクセスします。<br>
「ようこそ」というテキストとテキストボックス、ボタンが表示されていれば成功です。<br>
動作を止める場合は、ctrl+cで止めることができます。

# Note
前提として、3000番ポートは使用されていないこととします。

# Author
* 藤田留衣
