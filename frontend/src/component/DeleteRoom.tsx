import axios from "axios";
import '../css/button.css';
import '../css/modal-window.css';

type Props = {
  roomId: number,
  roomName: string,
  setViewDeleteWindow: Function,
  setRoomInfo: Function
}

const DeleteRoom = (props: Props) => {
  const url = 'http://localhost:8000';

  const onClickDeleteRoom = () => {
    axios.post(`${url}/delete_room`, {
      roomId: props.roomId
    })
      .then(() => {
        axios.get(`${url}/room_info`)
          .then(response => {
            props.setRoomInfo(response.data);
          });
      });
    props.setViewDeleteWindow(false);
  }

  return (
    <div className='modal-back'>
      <div className='modal-content'>
        <button className='close-button' onClick={() => { props.setViewDeleteWindow(false) }}>×</button>
        <div className='context-menu-text'>ルームを削除します</div>
        <div>「{props.roomName}」を削除します<br />
          よろしいですか
        </div>
        <div className='modal-content-button'>
          <button className='cancel-button' onClick={() => { props.setViewDeleteWindow(false) }}>キャンセル</button>
          <button className='edit-button' onClick={onClickDeleteRoom}>削除</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteRoom;