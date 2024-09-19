import React, { useEffect } from "react";
import { useState } from "react";
import { data } from "../DummyData/Data";
import Button from "../components/Button";
import SearchResult from "../components/SearchResult";

const HomePage = () => {
  function propFunc() {
    return data;
  }
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const search = (e) => {
    e.preventDefault();

    data.find((item) => item.email.toLowerCase() === searchInput.toLowerCase())
      ? data.find((item) => {
          if (item.email.toLowerCase() === searchInput.toLowerCase()) {
            setSearchResult(item);
          }
        })
      : alert("No Data found");
  };

  return (
    <div className="h-svh w-svh flex flex-col justify-center items-center bg-[#EE4266]">
      {searchResult && <SearchResult searchResult={searchResult} />}

      <form
        onSubmit={(e) => search(e)}
        className="flex flex-col items-center gap-10"
      >
        <div className="flex gap-10">
          <input
            className="outline-slate-500  h-12 w-80 p-5 rounded-lg "
            placeholder="Enter your Email id"
            type="email"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </div>
        <Button buttonText={`Search`} />
      </form>
    </div>
  );
};

export default HomePage;
