import React from "react";
import Icon from "../assets/icon1.png";
import { useState, useEffect } from "react";

const Calendar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const [darkMode, setDarkMode] = useState(false);

  
 useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <div>
      <div className="bg-white dark:bg-black  dark:border dark:border-white/10 ">
        <small className=" md:p-1 py-2 flex md:justify-end justify-center">
          <div>
            <input
              type="text"
              placeholder="Search for anything"
              className=" my-2 md:h-7 h-5 dark:bg-gray-700 dark:placeholder:text-gray-200 rounded-l-lg placeholder:text-xs placeholder:px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-800 text-white md:px-4 px-1 me-3 md:h-7 rounded-r-lg">
              <i className="bi bi-search text-white text-sm p-1"></i>
            </button>
          </div>
          <div className="flex  items-center  align-center">
            <i className="bi bi-question-circle-fill md:text-lg text-sm text-neutral-300 me-3"></i>
            <div className="relative inline-block">
              <i className="bi bi-bell-fill  md:text-lg text-sm text-neutral-300 me-3"></i>
              <span className="absolute -top-1 -right-1 me-3 bg-red-500 text-white text-[5px] min-w-[13px] h-[13px] px-1 rounded-full flex items-center justify-center ring-1 ring-white">
                15
              </span>
            </div>
            <img className="md:w-7 md:h-7 w-5 h-5  me-2" src={Icon}></img>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-1 py-1  rounded md:me-3 hidden md:block"
            >
              <i
                className={`bi ${
                  darkMode ? "bi-brightness-low-fill" : "bi-moon-fill"
                } text-lg`}
              ></i>
            </button>{" "}
          </div>
        </small>
      </div>
      <div className="p-5">
        <p className="text-lg font-semibold">Calendar tab</p>
      </div>
    </div>
  );
};

export default Calendar;
