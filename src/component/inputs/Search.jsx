import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="flex text-orange-700">
      <input
        className="border border-orange-700 border-r-0 p-2 px-3 rounded-l-full placeholder:text-orange-700 outline-none"
        placeholder="Skip khan"
        type="text"
      />
      <button className="border hover:bg-orange-300 transition-all border-orange-700 border-l-0  p-2 px-3  rounded-r-full">
        <AiOutlineSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
