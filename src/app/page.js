import { fetchData } from "../fetch";
import LayoutBox from "./Components/LayoutBox";

export default async function Home() {
  // fetchData();
  let { dataGet, error } = await fetchData("coins");
  // console.log(dataGet);
  // let targetCoin = dataGet.data.coins.filter((el) => {
  //   return el.name.toLowerCase().includes("Bitcoin".toLowerCase());
  // });
  // console.log(error);

  return (
    <>
      <LayoutBox {...{ dataGet, error }} />
    </>
  );
}
// let dataAx =
// "use client";
// import { useEffect, useState } from "react";
// import SearchCoins from "./Components/SearchCoins/SearchCoins";
// import { fetchData } from "./api/fetch";
// import CoinsBox from "./Components/CoinsBox/CoinsBox";

// export default function Home() {
//   // fetchData();
//   const [stateFetchData, setStateFetchData] = useState({});
//   const [stateFetchDataErr, setStateFetchDataErr] = useState(false);
//   useEffect(() => {
//     async function getDataFun() {
//       let { dataGet, error } = await fetchData("coins");
//       // console.log(dataGet);
//       setStateFetchData(dataGet);
//       setStateFetchDataErr(error);
//     }
//     getDataFun();
//     // let targetCoin = dataGet.data.coins.filter((el) => {
//     //   return el.name.toLowerCase().includes("Bitcoin".toLowerCase());
//     // });
//   }, []);

//   // console.log(error);

//   return (
//     <>
//       <div className="container h-full min-h-[100vh]">
//         <SearchCoins />
//         <CoinsBox
//           dataGet={stateFetchData}
//           error={stateFetchDataErr}
//         />
//       </div>
//     </>
//   );
// }
// // let dataAx =
