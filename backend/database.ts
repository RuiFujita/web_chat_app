import express, { response } from "express";
import bodyParser from "body-parser";
import { createServer, request } from "http";
import { Server } from "socket.io";

const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fuji28-nogi46',
  database: 'web_chatdb',
});

app.get('/room_info', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  connection.query(`SELECT * FROM room_info`, function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

app.post('/new_room', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  const roomName = request.body.roomName;
  connection.query(`INSERT INTO room_info (room_name) VALUES ('${roomName}')`, function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

app.post('/edit_room', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  const roomName = request.body.roomName;
  const roomId = request.body.roomId;
  connection.query(`UPDATE room_info SET room_name='${roomName}' WHERE (room_id=${roomId})`, function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

app.post('/delete_room', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  const roomId = request.body.roomId;
  connection.query(`UPDATE room_info SET is_deleted=1 WHERE (room_id=${roomId})`, function (error: any,
    results: []) {
    if (error) throw error;
    response.status(200).send(results);
  })
})

app.get('/chat_log', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  const roomId = request.query.roomId;
  connection.query(`SELECT * FROM chat_log WHERE (room_id=${roomId})`, function (error: any, results: []) {
    if (error) throw error;
    response.status(200).send(results);
  });
})

app.post('/messages', (request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
  connection.connect();

  const roomId = request.body.roomId;
  const dateTime = new Date().toLocaleString();
  const message = request.body.message;
  const sender = request.body.sender;
  connection.query(
    `INSERT INTO chat_log (room_id, message_date_time, message_contents, message_sender) VALUES (${roomId}, '${dateTime}', '${message}', '${sender}')`,
    (error: any, results: []) => {
      if (error) throw error;
      response.status(200).send(results);
    });
})

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
});

io.on('connect', (socket) => {
  let roomName = '';
  socket.on('join_room', (data: {
    roomName: string,
  }) => {
    roomName = data.roomName;
    socket.join(data.roomName);
  });

  socket.on('client_to_server', (msg) => {
    io.to(roomName).emit('server_to_client', msg);
  });

  socket.on('disconnect', () => {
    socket.leave(roomName);
  });
});

server.listen(port);