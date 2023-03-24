import { useState } from 'react';
import axios from 'axios';
import '../css/button.css';
import '../css/modal-window.css';

type Props = {
  roomId: number,
  roomName: string,
  setViewEditWindow: Function,
  setRoomInfo: Function
}

const EditRoom = (props: Props) => {
  const [editedRoomName, setEditedRoomName] = useState(props.roomName);

  const isDisabled = () => {
    const roomNameMaxLength = 30;
    const roomNameRegex = new RegExp(/[!-/:-@[-`{-~！-／：-＠［-｀｛-～、-〜”’・]/);
    const spaceRegex = new RegExp(/^\s+?$/);

    if (!editedRoomName.length
      || editedRoomName.length > roomNameMaxLength
      || roomNameRegex.test(editedRoomName)
      || spaceRegex.test(editedRoomName)
      || editedRoomName === props.roomName) {
      return true;
    } else {
      return false;
    }
  }

  const onClickEditRoom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    axios.post('/edit_room', {
      roomName: editedRoomName,
      roomId: props.roomId
    })
      .then(() => {
        axios.get('/room_info')
          .then(response => {
            props.setRoomInfo(response.data);
          });
      });
    props.setViewEditWindow(false);
  }

  return (
    <div className='modal-back'>
      <div className='modal-content'>
        <button className='close-button' onClick={() => { props.setViewEditWindow(false) }}>×</button>
        <div className='context-menu-text'>ルーム名を変更します</div>
        <div className='input-edited-room-name'>ルーム名
          <input
            value={editedRoomName}
            onChange={(event) => setEditedRoomName(event.target.value)}
          />
        </div>
        <div className='modal-content-button'>
          <button className='cancel-button' onClick={() => { props.setViewEditWindow(false) }}>キャンセル</button>
          <button className='change-button' onClick={onClickEditRoom} disabled={isDisabled()}>変更</button>
        </div>
      </div>
    </div>
  )
}

export default EditRoom;