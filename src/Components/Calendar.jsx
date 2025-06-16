import React from 'react'
import Icon from "../assets/icon1.png";
import { useState } from "react";

const Calendar = () => {
     const [searchQuery, setSearchQuery] = useState("");
  return (
     <div>
          <div class="bg-white p-1 flex md:justify-end  justify-center">
            <div>
              <input
                type="text"
                placeholder="Search for anything"
                className=" my-2 h-7 rounded-l-lg placeholder:text-sm placeholder:px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 me-3 h-7 rounded-r-lg">
                <i className="bi bi-search text-white text-sm"></i>
              </button>
            </div>
            <div className="flex  items-center  ">
              <i class="bi bi-question-circle-fill text-lg text-neutral-300 me-3"></i>
              <div class="relative inline-block">
                <i class="bi bi-bell-fill  text-lg text-neutral-300 me-3"></i>
                <span class="absolute -top-1 -right-1 me-3 bg-red-500 text-white text-[5px] min-w-[13px] h-[13px] px-1 rounded-full flex items-center justify-center ring-1 ring-white">
                  15
                </span>
              </div>
    
              <img className="w-7 h-7 me-5" src={Icon}></img>
            </div>
          </div>
           <div className='p-5'>
                 <p className='text-lg font-semibold'>Calendar tab</p>
               </div>
        </div>
  )
}

export default Calendar