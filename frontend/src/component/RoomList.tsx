import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateRoom from './CreateRoom';
import ChatView from './ChatSpace';
import '../UI/button.css';
import '../UI/home_page.css';
import '../UI/list.css';
import '../UI/text-box.css';
import '../UI/text.css';

type Props = {
  userName: string;
}

type Room = {
  room_id: number,
  room_name: string,
}

const RoomList = (props: Props) => {
  const [roomInfo, setRoomInfo] = useState([]);
  const [roomId, setRoomId] = useState(0);
  const [roomName, setRoomName] = useState('');
  const [switchRoomList, setSwitchRoomList] = useState(false);
  const [switchChatSpace, setSwitchChatSpace] = useState(false);
  const url = 'http://localhost:8000';

  useEffect(() => {
    axios.get(url + '/room_info')
      .then(response => {
        setRoomInfo(response.data);
      })
  }, []);

  const onClickCreateRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (switchChatSpace) {
      setSwitchChatSpace(false);
    }
    setSwitchRoomList(true);

    const initialText = document.getElementById('initialText');
    initialText!.textContent = 'ルームを作成します';
  }

  const onClickRoom = (index: number) => {
    setRoomId(index);
    setRoomName(roomInfo[index - 1]['room_name']);

    const initialText = document.getElementById('initialText');
    const selectedRoomName = document.getElementsByClassName('room-name')[index - 1].textContent;
    initialText!.textContent = selectedRoomName;

    if (switchRoomList === true) {
      setSwitchRoomList(false)
    }
    setSwitchChatSpace(true);
  }

  return (
    <div className='whole'>
      <div className='room-list-space'>
        <div className='room-name-list'>
          <ul>
            {roomInfo.map((room: Room) => (
              <li className='room-name' onClick={() => onClickRoom(room.room_id)} key={room.room_id}>{room.room_name}</li>
            ))}
          </ul>
        </div>
        <button className='btn-create-room' onClick={onClickCreateRoom}>ルーム作成</button>
      </div>

      <div className='work-space'>
        <div id='initialText' className='text-room-name'>ルームを選択してください</div>
        {switchRoomList && <CreateRoom setRoomInfo={setRoomInfo} />}
        {switchChatSpace && <ChatView userName={props.userName} roomId={roomId} roomName={roomName} />}
      </div>
    </div>
  );
}

export default RoomList;