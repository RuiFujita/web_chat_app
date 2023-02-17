// import axios from "axios";
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// // import '../UI/home_page.css';
// // import '../UI/text-box.css';
// import '../UI/text.css';

// type Props = {
//   userName: string,
//   roomId: number,
//   roomName: string,
// }

// type ChatLog = {
//   message_id: number,
//   room_id: number,
//   message_date_time: Date,
//   message_contents: string,
//   message_sender: string,
// }

// // socket.ioサーバーに接続
// const socket = io('http://localhost:8000/');
// socket.on('connect', () => {
//   console.log('socket.io: 接続しました');
// })

// const ChatView = (props: Props) => {
//   // メッセージ一覧
//   const [messageList, setMessageList] = useState<string[]>([]);
//   // テキストボックスの入力値
//   const [message, setMessage] = useState('');

//   // サーバーにイベントを送る(ルーム入室)
//   useEffect(() => {
//     const roomName = props.roomName
//     socket.emit('join_room', { roomName });
//   }, [props.roomName]);

//   // roomIdに対応したチャット履歴をサーバーから取得
//   const [chatLogs, setChatLogs] = useState([]);
//   useEffect(() => {
//     // console.log('roomId: ', props.roomId);
//     axios.get('http://localhost:8000/chat_log', {
//       params: { roomId: props.roomId }
//     })
//       .then(response => {
//         setChatLogs(response.data);
//         console.log('chatLog: ', response.data);
//       })
//     setMessageList([]);
//   }, [props.roomId]);

//   // テキストボックスの入力値をセット
//   const onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage(event.target.value);
//   }
//   // 送信ボタンがクリックされたときの処理
//   const onClickSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     event.preventDefault();
//     if (message === '') { return };
//     // サーバーへイベントを送る(messageを送信)
//     socket.emit('client_to_server', message);
//     setMessage('');

//     // サーバーにメッセージ情報をポスト
//     const datetime = new Date();
//     axios.post('http://localhost:8000/messages', {
//       roomId: props.roomId,
//       dateTime: datetime.toLocaleString(),
//       message: message,
//       sender: props.userName,
//     })
//       .then(response => {
//         // console.log('sent-data(msg): ', response);
//         scrollBottom();
//       })
//   }

//   // サーバーからイベントを受け取る(messageを受信)
//   useEffect(() => {
//     socket.on('server_to_client', (msg) => {
//       setMessageList((messageList) => [...messageList, msg]);
//       // console.log('msg: ', msg);
//     });
//   }, []);
//   // console.log('msg-list: ', messageList);

//   // スクロールバーの位置を最下部にする
//   const scrollBottom = () => {
//     const scrollId = document.getElementById('scroll');
//     scrollId?.scrollIntoView(false);
//   }

//   return (
//     <div id='chatSpace'>
//       <div className='chat_list'>
//         <ul>
//           {chatLogs.map((chatLog: ChatLog) => (
//             <div>
//               <p className={chatLog.message_sender === props.userName ? 'text_my_name' : 'text_others_name'}>{chatLog.message_sender}</p>
//               <li className={chatLog.message_sender === props.userName ? 'my_chat_list' : 'others_chat_list'} key={chatLog.message_id}>{chatLog.message_contents}</li>
//             </div>
//           ))}
//           {messageList.map((data, index) => (
//             <>
//               <p className='text_my_name'>{props.userName}</p>
//               <li className='my_chat_list' key={index}>{data}</li>
//             </>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <div className='input_message'>
//           <p className='text_user_name'>{props.userName}</p>
//           <form>
//             <input
//               value={message}
//               placeholder='送信したい内容を入力して下さい'
//               onChange={onChangeMessage}
//             />
//             <button type='submit' className='btn_send_message' onClick={onClickSend}>送信</button>
//           </form>
//         </div>
//       </div>
//     </div >
//   );
// }

// export default ChatView;