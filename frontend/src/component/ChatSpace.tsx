import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import '../UI/text.css';

type Props = {
  userName: string,
  roomId: number,
  roomName: string,
}

type ChatLog = {
  message_id: number,
  room_id: number,
  message_date_time: Date,
  message_contents: string,
  message_sender: string,
}

type SendMessage = {
  message: string,
  userName: string,
}

const socket = io('http://localhost:8000/');

const ChatView = (props: Props) => {
  const [messageList, setMessageList] = useState<SendMessage[]>([]);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const roomName = props.roomName;
    socket.emit('join_room', { roomName });
  }, [props.roomName]);

  useEffect(() => {
    axios.get('http://localhost:8000/chat_log', {
      params: { roomId: props.roomId }
    })
      .then(response => {
        setChatLog(response.data);
      })
    setMessageList([]);
  }, [props.roomId]);

  useEffect(() => {
    socket.on('server_to_client', (msg) => {
      setMessageList((messageList) => [...messageList, msg]);
    });
  }, []);

  const onChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const onClickSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!message) { return };

    socket.emit('client_to_server',
      {
        message,
        userName: props.userName
      });
    setMessage('');

    axios.post('http://localhost:8000/messages', {
      roomId: props.roomId,
      dateTime: new Date().toLocaleString(),
      message,
      sender: props.userName,
    })
  }

  return (
    <div className='chat-space'>
      <div className='chat-list'>
        <ul>
          {chatLog.map((chatLog: ChatLog) => (
            <div key={chatLog.message_id}>
              <p className={chatLog.message_sender === props.userName ? 'text-my-name' : 'text-others-name'}>{chatLog.message_sender}</p>
              <li className={chatLog.message_sender === props.userName ? 'my-chat-list' : 'others-chat-list'}>{chatLog.message_contents}</li>
            </div>
          ))}
          {messageList.map((data, index) => (
            <div key={index}>
              <p className={data.userName === props.userName ? 'text-my-name' : 'text-others-name'}>{data.userName}</p>
              <li className={data.userName === props.userName ? 'my-chat-list' : 'others-chat-list'}>{data.message}</li>
            </div>
          ))}
        </ul>
      </div >

      <div className='input-message'>
        <p className='text-user-name'>{props.userName}</p>
        <input
          value={message}
          placeholder='送信したい内容を入力して下さい'
          onChange={onChangeMessage}
        />
        <button className='btn-send-message' onClick={onClickSend}>送信</button>
      </div>
    </div>
  );
}

export default ChatView;