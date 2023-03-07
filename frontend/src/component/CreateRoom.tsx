import { useState } from "react";
import axios from "axios";
import '../css/button.css';
import '../css/text-box.css';

type Props = {
  setRoomInfo: Function
}

const CreateRoom = (props: Props) => {
  const [roomName, setRoomName] = useState('');
  const url = 'http://localhost:8000';

  const isDisabled = () => {
    const roomNameMaxLength = 30;
    const roomNameRegex = new RegExp(/[!-/:-@[-`{-~！-／：-＠［-｀｛-～、-〜”’・]/);
    const spaceRegex = new RegExp(/^\s+?$/);

    if (!roomName.length || roomName.length > roomNameMaxLength || roomNameRegex.test(roomName) || spaceRegex.test(roomName)) {
      return true;
    } else {
      return false;
    }
  }

  const onClickCreateRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    axios.post(url + '/new_room', { roomName: roomName })
      .then(response => {
        axios.get(url + '/room_info')
          .then(response => {
            props.setRoomInfo(response.data);
          });
      });
    setRoomName('');
  }

  return (
    <div>
      <div className='input-room-name'>
        <input
          value={roomName}
          placeholder='ルームを追加'
          onChange={(event) => setRoomName(event.target.value)}
        />
        <button className='create-button' onClick={onClickCreateRoom} disabled={isDisabled()}>作成</button>
      </div>
    </div>
  )
}

export default CreateRoom;