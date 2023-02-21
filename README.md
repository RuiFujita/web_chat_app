# web_chat_app
選択したルーム内でチャットができるウェブアプリケーション。

# Installation & Setting
1. 以下のリンクからNode.jsとMySQLをダウンロード、インストールしてください。<br>
Node.js: https://nodejs.org/ja/download/current/<br>
MySQL  : https://www.mysql.com/jp/

2. インストールが完了しましたら、MySQL Workbench8.0を開きます。<br>
    （デフォルトでは C:\Program Files\MySQL にあります。）

3. MySQLWorkbench.exeを起動します。

4. MySQL ConnectionsにあるLocal instance MySQL80というコネクションをクリックします。<br>
![picture 1](images/bde08982fc96e6af7631f8d94bc94c3ac5cdd15f1b1636dbee810a7fcd8e3837.png)  
    passwordの入力を求められますので、インストール時に設定したパスワードを入力してください。
![picture 2](images/808caa782b7446d00149c9fcd10eb33cef5ded6b000c9c3234e958906c73ddb5.png)  

5. タブの下にあるアイコンで、左から4つ目のアイコンをクリックしてください。
![picture 3](images/aafa997f465ee2bfe95f081e9ce9539d8fec18ed0fb3eb83072e68760656d999.png)  

6. 「web_chatdb」という名前に書き換えて、Applyボタンをクリックしてください。<br>
![picture 4](images/0a57fe157e5ef6094bbb9bc8635faa7c045ae066139931cf8ca635fe367578d9.png)  
    左のSCHEMAS欄にweb_chatdbが表示されます。

7.  web_chatdbを開き、Tablesを左クリックしてCreate tableをクリックしてください。
![picture 5](images/447b71a939df269070947ae0c47567cc57df4763b3a0882551ad7c4fbfd51eb2.png)  

8.  テーブル名を「room_info」として、下画像のようにカラムを追加してください。
![picture 6](images/ca8510efaa9d0cc6f27ea04d55d1545ed5e8a34f4d84a21e1c84a6c076ebce5c.png)  

9. 7~8と同様の手順で「chat_log」テーブルも作成します。
![picture 7](images/2f9ac2ee1e0ce14b28ab26a6284359fc02c5e2a4971f3e7bd0dad8aefd755ef8.png)  

# Note
注意点などがあれば書く

# Author
* 藤田留衣
