// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../UI/button.css';
// import '../UI/home_page.css';
// import '../UI/list.css';
// import '../UI/text-box.css';

// type Room = {
//   room_id: number,
//   room_name: string,
// }

// const HomePage = () => {
//   //2023/02/07
//   const [rooms, setRooms] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:8000/")
//       .then(response => {
//         setRooms(response.data);
//       })
//   }, []);
//   console.log(rooms);

//   //2023/02/06
//   // const roomInfo = async () => {
//   //   const response = await axios.get("http://localhost:8000/");
//   //   return response.data;
//   // setRooms(response.data);
//   // }
//   // const rooms = await roomInfo();

//   //2023/02/03
//   // test1: useState
//   // const [roomInfo, setRoomInfo] = useState({
//   //   roomId: 0,
//   //   roomName: '',
//   // });
//   // test2: Map
//   // const roomInfo = new Map<number, string>();
//   // axios.get('http://localhost:8000/')
//   // .then(res => {
//   //   test1: useState
//   //   for (let i = 0; i < res.data.length; i++) {
//   //     console.log(res.data[i].room_id, res.data[i].room_name);
//   //     setRoomInfo({ ...roomInfo, roomName: res.data[i].room_name });
//   //   }
//   //   test2: Map
//   //   for (let i = 0; i < res.data.length; i++) {
//   //     roomInfo.set(res.data[i].room_id, res.data[i].room_name);
//   //   }
//   //   console.log(roomInfo);
//   // })
//   // .catch((error) => {
//   //   console.log('ERROR : ', error);
//   // })

//   return (
//     <div>
//       <div id='workSpace'>
//         <div id='initialText'></div>
//         <div id='chatSpace'>
//           <div id='userName'>
//           </div>
//         </div>
//       </div>
//       <div id='roomList'>
//         <ul>
//           {rooms?.map((room: Room) => {
//             return (
//               <li key={room.room_id}>{room.room_name}</li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default HomePage;