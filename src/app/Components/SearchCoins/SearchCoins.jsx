"use client";

import { Search } from "@mui/icons-material";
import React, { useCallback, useEffect, useState } from "react";

const SearchCoins = ({ searchType, setSearchType }) => {
  const [query, setQuery] = useState("");
  // console.log(query);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSearchType(query);
    },
    [setSearchType, query]
  );

  useEffect(() => {
    if (query == "" && searchType !== "") {
      setSearchType("");
    }
  }, [query, searchType, setSearchType]);
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="search_coins sticky top-0 w-full   h-[80px] gap-[10px] bg-white border-b-2 flex justify-center items-center"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" flex-1 max-w-[300px] outline-none border-none rounded-[4px] px-[10px] h-[40px] bg-gray-100"
        />
        <button
          type="submit"
          className=" bg-gray-800 text-white h-[40px] min-w-[40px] w-[40px] flex justify-center items-center  rounded-full"
        >
          <Search className=" !text-white" />
        </button>
      </form>
    </>
  );
};

export default SearchCoins;
