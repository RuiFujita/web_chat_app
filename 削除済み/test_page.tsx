// import React from "react";

// type userInfo = {
//   userName: string;
// };

// const App: React.FC = () => {
//   const [fruits, setFruits] = React.useState<Fruit[] | null>(null);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api");
//         const json: React.SetStateAction<Fruit[] | null> = await res.json();
//         setFruits(json);
//       } catch (e: unknown) {
//         if (e instanceof Error) {
//           console.error(e.message);
//         }
//       }
//     };

//     fetchData();
//   })

//   return (
//     <div className="container fruitsList">
//       <h1>ようこそ</h1>
//       <div className="cp_iptxt">
//         <label className="ef">
//           <input type="text" placeholder="名前を入力してください" />
//         </label>
//       </div>
//       {/* <button title="" onClick={() => alert('Click!!')}></button> */}
//       <a href="" className="btn_01" onClick={() => alert('Click!!')}>登録</a>
//     </div>
//   );
// };

// export default App;