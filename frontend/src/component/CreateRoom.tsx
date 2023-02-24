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

  const inputRoomName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  }

  const onClickCreateRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const roomNameMaxLength = 30;
    if (roomName.length === 0) {
      alert('ルーム名を入力してください');
    } else if (roomName.length > roomNameMaxLength) {
      alert('文字数制限を超えています（30字以下）');
      setRoomName('');
    } else {
      axios.post('/new_room', { roomName: roomName })
        .then(response => {
          axios.get(url + '/room_info')
            .then(response => {
              props.setRoomInfo(response.data);
            });
        });
      setRoomName('');
    }
  }

  return (
    <div>
      <div className='input-room-name'>
        <input
          value={roomName}
          placeholder='ルームを追加'
          onChange={inputRoomName} />
        <button className='create-button' onClick={onClickCreateRoom}>作成</button>
      </div>
    </div>
  )
}

export default CreateRoom;