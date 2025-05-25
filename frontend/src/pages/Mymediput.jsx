import React from "react";
import { FiSearch, FiCamera } from "react-icons/fi";

const MyMediput = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-[#fff] rounded-full relative w-full max-w-[1040px] mb-8 px-2 mx-auto md:ml-[170px]">
      <input
        type="text"
        placeholder="Search something"
        className="flex-1 border-none bg-[#fff] outline-none text-black text-[15px] py-[18px] pl-[26px] pr-[100px] rounded-full w-full placeholder-black"
      />
      <div className="absolute right-2 flex gap-2">
        <button className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#2af598] to-[#009efd] border-0 flex items-center justify-center text-white hover:bg-[#1a1a1a] hover:shadow-lg transform hover:-translate-y-[3px] active:shadow-none active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <FiSearch size={20} />
        </button>
        <button className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#2af598] to-[#009efd] border-0 flex items-center justify-center text-white hover:bg-[#1a1a1a] hover:shadow-lg transform hover:-translate-y-[3px] active:shadow-none active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <FiCamera size={20} />
        </button>
      </div>
    </div>
  );
};

export default MyMediput;
