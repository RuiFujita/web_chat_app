import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateRoom from './CreateRoom';
import ChatSpace from './ChatSpace';
import EditRoom from './EditRoom';
import '../css/block-room-list.css';
import '../css/button.css';
import '../css/context-menu.css';
import '../css/list.css';
import '../css/text-box.css';
import '../css/text.css';

type Props = {
  userName: string;
}

type Room = {
  room_id: number,
  room_name: string,
}

const RoomList = (props: Props) => {
  const [roomData, setRoomData] = useState([]);
  const [roomId, setRoomId] = useState(0);
  const [contextMenuRoomId, setContextMenuRoomId] = useState(0);
  const [roomName, setRoomName] = useState('');
  const [switchCreateRoom, setSwitchCreateRoom] = useState(false);
  const [switchChatSpace, setSwitchChatSpace] = useState(false);
  const [viewEditWindow, setViewEditWindow] = useState(false);
  const url = 'http://localhost:8000';

  useEffect(() => {
    axios.get(`${url}/room_info`)
      .then((response) => {
        setRoomData(response.data);
      })
  }, []);

  const onClickSwitchCreateRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const initialText = document.getElementById('initialText');
    initialText!.textContent = 'ルームを作成します';
    if (switchChatSpace) {
      setSwitchChatSpace(false);
    }
    setSwitchCreateRoom(true);
  }

  const onClickRoomName = (index: number) => {
    setRoomId(index);
    setRoomName(roomData[index - 1]['room_name']);

    const initialText = document.getElementById('initialText');
    const selectedRoomName = document.getElementsByClassName('room-name')[index - 1].textContent;
    initialText!.textContent = selectedRoomName;

    if (switchCreateRoom === true) {
      setSwitchCreateRoom(false);
    }
    setSwitchChatSpace(true);
  }

  const viewContextMenu = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setContextMenuRoomId(index);
    setRoomName(roomData[index - 1]['room_name']);

    const contextMenu = document.getElementById('contextMenu');
    contextMenu!.style.left = event.pageX + 'px';
    contextMenu!.style.top = event.pageY + 'px';
    contextMenu!.style.display = 'block';

    const roomNameList = document.getElementById('roomNameList');
    roomNameList!.style.pointerEvents = 'none';

    document.body.addEventListener('click', () => {
      contextMenu!.style.display = 'none';
      roomNameList!.style.pointerEvents = 'auto';
    })
  }

  return (
    <div className='whole'>
      <div className='room-list-space'>
        <div className='room-name-list' id='roomNameList'>
          <ul>
            {roomData.map((room: Room) => (
              <li
                className='room-name'
                onClick={() => onClickRoomName(room.room_id)}
                onContextMenu={(event) => viewContextMenu(event, room.room_id)}
                key={room.room_id}
              >{room.room_name}</li>
            ))}
          </ul>
        </div>
        <button className='create-room-button' onClick={onClickSwitchCreateRoom}>ルーム作成</button>
      </div>

      <div className='work-space'>
        <div id='initialText' className='room-name-text'>ルームを選択してください</div>
        {switchCreateRoom && <CreateRoom setRoomInfo={setRoomData} />}
        {switchChatSpace &&
          <ChatSpace
            userName={props.userName}
            roomId={roomId}
            roomName={roomName}
          />}
      </div>

      <div className='context-menu' id='contextMenu'>
        <ul>
          <li id='editRoom' onClick={() => setViewEditWindow(true)}>ルームを編集</li>
          <li>ルームを削除</li>
        </ul>
      </div>
      {viewEditWindow &&
        <EditRoom
          roomId={contextMenuRoomId}
          roomName={roomName}
          setViewEditWindow={setViewEditWindow}
          setRoomInfo={setRoomData}
        />}
    </div>
  );
}

export default RoomList;