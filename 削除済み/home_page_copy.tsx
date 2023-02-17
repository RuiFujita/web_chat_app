// import { SetStateAction, useEffect, useState } from 'react';
// import InitialPage from './initial_page';
// import '../UI/button.css';
// import '../UI/home_page.css';
// import '../UI/list.css';
// import '../UI/text-box.css';
// import ChatView from './home_page/chat_view';
// import RoomList from './home_page/room_list';

// type Props = {
//   userName: string;
// }

// const HomePage = (props: Props) => {
//   //初期状態
//   const initialState = [
//     {
//       name: '初期値',
//       isCompleted: false
//     }
//   ]
//   const [rooms, setRooms] = useState(initialState);
//   const [name, setName] = useState('')
//   const [result, setResult] = useState([])

//   const handleNewTask = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setName(event.target.value)
//   }
//   const handleSubmit = (event: { preventDefault: () => void; }) => {
//     event.preventDefault()
//     if (name === '') return
//     setRooms(rooms => [...rooms, { name, isCompleted: false }])
//     setName('')
//   }

//   //選択したルーム名を表示する
//   const test = (index: number) => {
//     //初期idを取得
//     var initialText = document.getElementById('initialText')
//     //クリックしたルームのidを取得
//     var selectedRoomName = document.getElementsByClassName('room-name')[index]
//     //初期idの文字列を上書き
//     initialText!.textContent = selectedRoomName.textContent
//     // console.log(selectedRoomName.textContent);
//   }

//   return (
//     <div>
//       <div id='workSpace'>
//         <div id='initialText'>ルームを選択してください</div>
//         <ChatView name={''} />
//         <div id='chatSpace'>
//           チャット表示領域
//           <div id=''></div>
//           <div id=''></div>
//           <div id='userName'>
//             {props.userName}
//             <form>
//               <input
//                 placeholder="送信したい内容を入力して下さい"
//               />
//               <button type="submit">送信</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <RoomList />
//       <div id='roomList'>
//         <ul>
//           {rooms.map((todo, index) => (
//             <li className='room-name' onClick={() => test(index)} key={index}>{todo.name}</li>
//           ))}
//         </ul>
//         <form onSubmit={handleSubmit}>
//           <input
//             value={name}
//             placeholder="ルームを追加"
//             onChange={handleNewTask}
//           />
//           <button type="submit">作成</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default HomePage;