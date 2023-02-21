# web_chat_app
選択したルーム内でチャットができるウェブアプリケーション。

# Installation
1. 以下のリンクからNode.jsとMySQLをダウンロード、インストールしてください。<br>
Node.js: https://nodejs.org/ja/download/current/<br>
MySQL  : https://www.mysql.com/jp/

2.  インストールが完了しましたら、MySQL Workbench8.0を開きます。<br>
    （デフォルトでは C:\Program Files\MySQL にあります。）

3.  MySQLWorkbench.exeを起動します。

4.  MySQL ConnectionsにあるLocal instance MySQL80というコネクションをクリックします。<br>
![picture 1](images/bde08982fc96e6af7631f8d94bc94c3ac5cdd15f1b1636dbee810a7fcd8e3837.png)  
    passwordの入力を求められますので、インストール時に設定したパスワードを入力してください。
![picture 2](images/808caa782b7446d00149c9fcd10eb33cef5ded6b000c9c3234e958906c73ddb5.png)  

5.  タブの下に10個のアイコンが並んでいます。
    左から4つ目のアイコン(Create a new schema)をクリックしてください。

6.  「web_chatdb」という名前に書き換えて、Applyボタンをクリックしてください。
    左のSCHEMAS欄にweb_chatdbが表示されます。

7.  web_chatdbを開き、Tablesを左クリックしてCreate tableをクリックしてください。

8.  テーブル名を「room_info」として、下表のカラムを追加してください。
   


# Usage


# Note
注意点などがあれば書く

# Author
* 藤田留衣
