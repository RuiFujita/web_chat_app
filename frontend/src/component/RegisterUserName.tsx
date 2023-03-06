import { useState } from "react";
import RoomList from "./RoomList";
import '../css/reset-margin.css';
import '../css/button.css';
import '../css/text-box.css';
import '../css/text.css';

const RegisterUserName = () => {
  const [switchRoomList, setSwitchRoomList] = useState(false);
  const [userName, setUserName] = useState('');

  const isDisabled = () => {
    const userNameMaxLength = 20;
    const userNameRegex = new RegExp(/[ -/:-@[-`{-~！-／：-＠［-｀｛-～、-〜”’・　]/);

    if (userName.length === 0) {
      return true;
    } else if (userName.length > userNameMaxLength) {
      return true;
    } else if (userNameRegex.test(userName)) {
      return true;
    } else {
      return false;
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
              onChange={(event) => setUserName(event.target.value)}
              placeholder='名前を入力してください'
            />
            <button className='register-button' onClick={() => setSwitchRoomList(true)} disabled={isDisabled()}>登録</button>
          </div>
        </div>
      }
      {switchRoomList && <RoomList userName={userName} />}
    </div>
  );
};

export default RegisterUserName