import { useState } from "react";
import RoomList from "./RoomList";
import '../UI/button.css';
import '../UI/initial_page.css';
import '../UI/text-box.css';

const RegisterUserName = () => {
  const [switchRoomList, setSwitchRoomList] = useState(false);
  const [userName, setUserName] = useState('');

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const onClickNameCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (userName.length === 0) {
      alert('名前を入力してください');
    } else if (userName.length > 20) {
      alert('文字数制限を超えています');
      setUserName('');
    } else {
      setSwitchRoomList(true);
    }
  }

  return (
    <div>
      {!switchRoomList &&
        <div>
          <div id='welcameText'>ようこそ</div>
          <div id='registerUserName' className='input-user-name'>
              <input
                type='text'
                value={userName}
                onChange={onChangeUserName}
                placeholder='名前を入力してください'
              />
              <button className='btn-register' onClick={onClickNameCheck}>登録</button>
          </div>
        </div>
      }
      {switchRoomList && <RoomList userName={userName} />}
    </div >
  );
};
export default RegisterUserName