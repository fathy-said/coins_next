"use client";

import { useEffect, useState } from "react";
import CoinsBox from "./CoinsBox/CoinsBox";
import SearchCoins from "./SearchCoins/SearchCoins";

const LayoutBox = ({ dataGet, error }) => {
  const [searchType, setSearchType] = useState("");
  const [searchData, setSearchData] = useState([]);

  // console.log(searchType);
  useEffect(() => {
    if (searchType !== "") {
      let targetCoin = dataGet?.data?.coins.filter((el) => {
        return el.name.toLowerCase().includes(searchType.toLowerCase());
      });
      setSearchData(targetCoin);
    } else {
      setSearchData([]);
    }
  }, [searchType, dataGet?.data?.coins]);
  return (
    <>
      <div className="container h-full min-h-[100vh]">
        <SearchCoins {...{ searchType, setSearchType }} />
        <CoinsBox {...{ dataGet, error, searchData }} />
      </div>
    </>
  );
};

export default LayoutBox;
