// import axios from "axios";
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import '../UI/home_page.css';
// import '../UI/text-box.css';

// type User = {
//   name: string;
// }

// type ChatLog = {
//   message_id: number,
//   room_id: number,
//   message_data_time: Date,
//   message_contents: string,
//   message_sender: string,
// }

// // socket.ioサーバーに接続
// const socket = io('http://localhost:3000/');
// socket.on('connect', () => {
//   console.log('接続しました');
// })

// const ChatView = (user: User) => {
//   // メッセージ一覧（全員が送信した内容）
//   const [messageList, setMessageList] = useState<string[]>([]);
//   // テキストボックスの入力値
//   const [message, setMessage] = useState('');

//   // メッセージを受信(サーバーからイベントが送信された)
//   useEffect(() => {
//     socket.on('received_message', (msg) => {
//       console.log('33-34');
//       setMessageList((messageList) => [...messageList, msg]);
//     });
//   }, []);
//   // console.log('msg-list: ', messageList);

//   //テキストボックスの入力値をセット
//   const onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage(event.target.value);
//   }
//   // console.log('send-msg: ', message);

//   //サーバーにmessageを送信する
//   const onClickSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     event.preventDefault();
//     // console.log('48-49');
//     socket.emit('send_message', message);
//     setMessage('');
//   }

//   return (
//     <div>
//       <div id='chatSpace'>
//         <ul className="chat_list">{messageList.map((data, index) => (
//           <li key={index}>{data}</li>
//         ))}</ul>
//       </div>

//       <div id='userName'>
//         {user.name}
//         <form>
//           <input
//             value={message}
//             placeholder="送信したい内容を入力して下さい"
//             onChange={onChangeMessage}
//           />
//           <button type="submit" onClick={onClickSend}>送信</button>
//         </form>
//       </div>
//     </div >
//   );
// }

// export default ChatView;