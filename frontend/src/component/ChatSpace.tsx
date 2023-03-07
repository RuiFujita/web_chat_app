import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import '../css/button.css';
import '../css/list.css';
import '../css/text-box.css';
import '../css/text.css';

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

const url = 'http://localhost:8000';
const socket = io(url);

const ChatSpace = (props: Props) => {
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<SendMessage[]>([]);

  useEffect(() => {
    const roomName = props.roomName;
    socket.emit('join_room', { roomName });
  }, [props.roomName]);

  useEffect(() => {
    axios.get(url + '/chat_log', {
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

  const isDisabled = () => {
    const messageMaxLength = 200;
    const messageRegex = new RegExp(/['\\]/);
    const spaceRegex = new RegExp(/^\s+?$/);

    if (!message.length || message.length > messageMaxLength || messageRegex.test(message) || spaceRegex.test(message)) {
      return true;
    } else {
      return false;
    }
  }

  const onClickSend = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    socket.emit('client_to_server',
      {
        message,
        userName: props.userName
      });
    setMessage('');

    axios.post(url + '/messages', {
      roomId: props.roomId,
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
              <p className={chatLog.message_sender === props.userName ? 'my-name-text' : 'others-name-text'}>{chatLog.message_sender}</p>
              <li className={chatLog.message_sender === props.userName ? 'my-chat-list' : 'others-chat-list'}>{chatLog.message_contents}</li>
            </div>
          ))}
          {messageList.map((data, index) => (
            <div key={index}>
              <p className={data.userName === props.userName ? 'my-name-text' : 'others-name-text'}>{data.userName}</p>
              <li className={data.userName === props.userName ? 'my-chat-list' : 'others-chat-list'}>{data.message}</li>
            </div>
          ))}
        </ul>
      </div >

      <div className='input-message'>
        <p className='user-name-text'>{props.userName}</p>
        <input
          value={message}
          placeholder='送信したい内容を入力して下さい'
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className='send-message-button' onClick={onClickSend} disabled={isDisabled()}>送信</button>
      </div>
    </div>
  );
}

export default ChatSpace;