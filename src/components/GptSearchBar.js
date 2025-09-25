import React from "react";
import { BG_URL } from "../utils/constant";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const userClickLang = useSelector((store) => store.userClick.language);
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-b from-black">
        <img src={BG_URL} alt="bg-screen" />
      </div>
      <form className="mt-[10%] w-1/2 grid grid-cols-12 absolute">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[userClickLang].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[userClickLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
