import axios from "axios";
import '../css/button.css';
import '../css/modal-window.css';

type Props = {
  roomId: number,
  roomName: string,
  setViewDeleteWindow: Function,
  setRoomInfo: Function,
  setSwitchChatSpace: Function
}

const DeleteRoom = (props: Props) => {

  const onClickDeleteRoom = () => {
    axios.post('/delete_room', {
      roomId: props.roomId
    })
      .then(() => {
        axios.get('/room_info')
          .then(response => {
            props.setRoomInfo(response.data);
          });
      });
    props.setViewDeleteWindow(false);
    props.setSwitchChatSpace(false);

    const initialText = document.getElementById('initialText');
    initialText!.textContent = 'ルームを選択してください';
  }

  return (
    <div className='modal-back'>
      <div className='modal-content'>
        <button className='close-button' onClick={() => { props.setViewDeleteWindow(false) }}>×</button>
        <div className='context-menu-text'>ルームの削除</div>
        <div className='delete-menu-text'>
          「{props.roomName}」を削除します。<br />
          よろしいですか？
        </div>
        <div className='modal-content-button'>
          <button className='cancel-button' onClick={() => { props.setViewDeleteWindow(false) }}>キャンセル</button>
          <button className='delete-button' onClick={onClickDeleteRoom}>削除</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteRoom;