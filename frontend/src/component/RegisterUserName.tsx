import { useState } from "react";
import RoomList from "./RoomList";
import '../css/reset-margin.css';
import '../css/button.css';
import '../css/text-box.css';
import '../css/text.css';

const RegisterUserName = () => {
  const [switchRoomList, setSwitchRoomList] = useState(false);
  const [userName, setUserName] = useState('');

  const inputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const userNameCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const userNameMaxLength = 20;
    if (userName.length === 0) {
      alert('名前を入力してください');
    } else if (userName.length > userNameMaxLength) {
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
          <div className='welcome-text'>ようこそ</div>
          <div className='input-user-name'>
              <input
                type='text'
                value={userName}
                onChange={inputUserName}
                placeholder='名前を入力してください'
              />
              <button className='register-button' onClick={userNameCheck}>登録</button>
          </div>
        </div>
      }
      {switchRoomList && <RoomList userName={userName} />}
    </div >
  );
};
export default RegisterUserName