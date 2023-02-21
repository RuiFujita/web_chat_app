# web_chat_app
選択したルーム内でチャットができるウェブアプリケーション。

# Installation
1. 以下のリンクからNode.jsとMySQLをダウンロード、インストールしてください。<br>
Node.js: https://nodejs.org/ja/download/current/<br>
MySQL  : https://www.mysql.com/jp/

2.  インストールが完了しましたら、MySQL Workbench8.0を開きます。<br>
    （デフォルトでは C:\Program Files\MySQL にあります。）

3.  MySQLWorkbench.exeを起動します。
![Alt text](../Users/r23600285/OneDrive%20-%20Ricoh/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97/Workbench%E8%B5%B7%E5%8B%95.png)
4.  MySQL ConnectionsにあるLocal instance MySQL80というコネクションをクリックします。<br>
    passwordの入力を求められますので、インストール時に設定したパスワードを入力してください。

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
