# backend
MySQL（データベース）とデータの受け渡しをしたり、フロントエンドとやり取りをしている。

# Requirement
* @types/express 4.17.15
* @types/node 18.11.18
* nodemon 2.0.20
* ts-node 10.9.1
* typescript 4.9.4
* cors 2.8.5
* express 4.18.2
* mysql2 3.1.0
* socket.io 4.6.0

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
database.tsが実行されます。<br>
動作を止める場合は、ctrl+cで止めることができます。

# Note
前提として、8000番ポートは使用されていないこととします。

# Author
* 藤田留衣
