import React from "react";

import { useState,  } from "react";
import Log from "./assets/Group 4.png";
import Logo from "./assets/share.png";

// =========== Components

import DashboardComponent from "./Components/Dash";
import MsgComponent from "./Components/Mess";
import CalComponent from "./Components/Calendar";
import JobComponent from "./Components/Jobs2";
import CandComponent from "./Components/Candidate";
import RefComponent from "./Components/Referral";
import CarComponent from "./Components/Career";
import EmpComponent from "./Components/Employee";
import StrComponent from "./Components/Structure";
import RepComponent from "./Components/Report";
import SettComponent from "./Components/Settings";

const Dash2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recruitmentOpen, setRecruitmentOpen] = useState(false);
  const [orgOpen, setOrgOpen] = useState(false);

 const [activeScreen, setActiveScreen] = useState("Jobs");

  // ========================================================

 

  return (
    <div>
        <div class="grid grid-cols-1 md:grid-cols-12">
          <div class="md:col-span-3 lg:col-span-2 border-zinc-200 border">
            <div className="flex relative md:justify-start justify-center items-center align-center py-6 px-6">
              <div className="relative w-[42px] h-[42px] mr-2">
                <img className="absolute  z-0 " src={Log} alt="Background" />
                <img
                  className="absolute  z-10 px-2 py-2"
                  src={Logo}
                  alt="Foreground"
                />
              </div>
              <span className="font-semibold">Human R.</span>
            </div>

            <div className="pt-3">
              <div className=" pb-2 px-6">
                <small
                  className="font-semibold flex justify-between"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  MENU
                  <i
                    className={`bi ${
                      menuOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } md:hidden`}
                  ></i>
                </small>
                <small>
                  <ul
                    className={`list-none ${
                      menuOpen ? "block" : "hidden"
                    } md:block`}
                  >
                    <li
                      onClick={() => setActiveScreen("Dashboard")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Dashboard"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-grid-fill"></i>
                      <span className="px-2">
                        Dashboard
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Message")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Message"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-chat-square-text-fill"></i>
                      <span className="px-2">
                        Message
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Calendar")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Calendar"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-calendar-week-fill"></i>
                      <span className="px-2" href="">
                        Calendar
                      </span>
                    </li>
                  </ul>
                </small>
              </div>

              <div className=" pt-2 pb-3 px-6">
                <small
                  className="font-semibold flex justify-between "
                  onClick={() => setRecruitmentOpen(!recruitmentOpen)}
                >
                  RECRUITMENT
                  <i
                    className={`bi ${
                      recruitmentOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } md:hidden`}
                  ></i>
                </small>
                <small>
                  <ul
                    className={`list-none ${
                      recruitmentOpen ? "block" : "hidden"
                    } md:block`}
                  >
                    <li
                      onClick={() => setActiveScreen("Jobs")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Jobs"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-briefcase-fill"></i>
                      <span
                        className="px-2 pointer-events-none select-none"
                      
                      >
                        Jobs
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Candidate")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Candidate"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-people-fill"></i>
                      <span className="px-2" >
                        Candidates
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Referral")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Referral"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-recycle"></i>
                      <span className="px-2" >
                        My Referrals
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Career")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Career"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-display-fill"></i>
                      <span className="px-2" >
                        Career Site
                      </span>
                    </li>
                  </ul>
                </small>
              </div>

              <div className=" pt-2 pb-3 px-6">
                <small
                  className="font-semibold flex justify-between "
                  onClick={() => setOrgOpen(!orgOpen)}
                >
                  ORGANIZATION
                  <i
                    className={`bi ${
                      orgOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } md:hidden`}
                  ></i>
                </small>
                <small>
                  <ul
                    className={`list-none ${
                      orgOpen ? "block" : "hidden"
                    } md:block`}
                  >
                    <li
                      onClick={() => setActiveScreen("Employee")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Employee"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-people-fill"></i>
                      <span className="px-2" >
                        Employee
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Structure")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Structure"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-recycle"></i>
                      <span className="px-2" >
                        Structure
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Report")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Report"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-clipboard2-data-fill"></i>
                      <span className="px-2" >
                        Report
                      </span>
                    </li>
                    <li
                      onClick={() => setActiveScreen("Settings")}
                      className={`mt-1 rounded-md p-1 transition duration-300 ${
                        activeScreen === "Settings"
                          ? "text-white bg-blue-600 cursor-default"
                          : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                      }`}
                    >
                      <i className="bi bi-gear-wide-connected"></i>
                      <span className="px-2">
                        Settings
                      </span>
                    </li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
          <div class="md:col-span-9 lg:col-span-10">
            <div class="bg-slate-100 pb-10">
              {activeScreen === "Dashboard" && <DashboardComponent />}
              {activeScreen === "Message" && <MsgComponent />}
              {activeScreen === "Calendar" && <CalComponent />}
              {activeScreen === "Jobs" && <JobComponent />}
              {activeScreen === "Candidate" && <CandComponent />}
              {activeScreen === "Referral" && <RefComponent />}
              {activeScreen === "Career" && <CarComponent />}
              {activeScreen === "Employee" && <EmpComponent />}
              {activeScreen === "Structure" && <StrComponent />}
              {activeScreen === "Report" && <RepComponent />}
              {activeScreen === "Settings" && <SettComponent />}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dash2;
