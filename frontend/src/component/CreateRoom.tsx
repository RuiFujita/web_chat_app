import { useState } from "react";
import axios from "axios";

type Props = {
  setRoomInfo: Function
}

const CreateRoom = (props: Props) => {
  const [roomName, setRoomName] = useState('');
  const url = 'http://localhost:8000';

  const onChangeNewRoom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  }

  const onClickCreate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (roomName === '') {
      alert('ルーム名を入力してください')
      return
    }

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
          onChange={onChangeNewRoom} />
        <button className='btn-create' onClick={onClickCreate}>作成</button>
      </div>
    </div>
  )
}

export default CreateRoom;