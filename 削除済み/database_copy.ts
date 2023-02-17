import express from "express";
import bodyParser from "body-parser";

const cors = require('cors');
const mysql = require('mysql2');

//ポート番号
const port = 8000;

//Express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQLとのコネクションの作成
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fuji28-nogi46',
  database: 'web_chatdb'
  // host: `${process.env.MYSQL_HOST}`,
  // user: `${process.env.MYSQL_USER}`,
  // password: `${process.env.MYSQL_PASSWORD}`,
  // database: `${process.env.MYSQL_DATABASE}`,
});

//データを取得
app.get('/', (request, response) => {
  //Response Headers
  response.set({ 'Access-Control-Allow-Origin': '*' })
  //MySQLに接続
  connection.connect(() => {
    console.log('成功：ルーム情報を取得します');
  });
  //room_infoテーブルからデータを取得
  connection.query('SELECT * FROM room_info', function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

//データを追加
app.post('/new_room', (request, response) => {
  //Response Headers
  response.set({ 'Access-Control-Allow-Origin': '*' })
  //MySQLに接続
  connection.connect(() => {
    console.log('成功：ルーム情報を追加します');
  });
  //room_infoテーブルへデータを追加
  console.log(request.body);
  const roomName = request.body.roomName;
  console.log('roomName: ', roomName);
  connection.query(`INSERT INTO room_info (room_name) VALUES ('${roomName}')`, function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
