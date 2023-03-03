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
    const AtoZ = '\\w'
    const hiragana = '\\p{scx=Hiragana}'
    const katakanaZen = '\\p{scx=Katakana}'
    const katakanaHan = 'ｦ-ﾟ'
    const kanji = '\\p{scx=Han}'
    const mixRegex = (...regex: string[][]) => new RegExp('^[' + regex.join('') + ']+$', 'u')

    if (mixRegex([AtoZ, hiragana, katakanaZen, katakanaHan, kanji]).test(userName)) {
      console.log(userName, ' は正しい入力です');
    } else {
      console.log(userName, ' は禁則文字です');
    }

    const userNameMaxLength = 20;
    if (userName.length === 0) {
      return true;
    } else if (userName.length > userNameMaxLength) {
      return true;
    } else if (!mixRegex([AtoZ, hiragana, katakanaZen, katakanaHan, kanji]).test(userName)) {
      return true;
    } else {
      return false;
    }
  }

  // const inputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserName(event.target.value);
  // }

  // const userNameCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault();
  //   const userNameMaxLength = 20;
  //   if (userName.length === 0) {
  //     alert('名前を入力してください');
  //   } else if (userName.length > userNameMaxLength) {
  //     alert('文字数制限を超えています(20字以下)');
  //     setUserName('');
  //   } else {
  //     setSwitchRoomList(true);
  //   }
  // }

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
    </div >
  );
};
export default RegisterUserName