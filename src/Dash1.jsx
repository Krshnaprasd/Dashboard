import React from "react";

import { Switch } from "@heroui/react";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react";
import Log from "./assets/Group 4.png";
import Logo from "./assets/share.png";
import { useState, useEffect } from "react";

// =========== Components

import DashboardComponent from "./Components/Dash";
import MsgComponent from "./Components/Mess";
import CalComponent from "./Components/Calendar";

import CandComponent from "./Components/Candidate";
import RefComponent from "./Components/Referral";
import CarComponent from "./Components/Career";
import EmpComponent from "./Components/Employee";
import StrComponent from "./Components/Structure";
import RepComponent from "./Components/Report";
import SettComponent from "./Components/Settings";

const Dash1 = () => {
  // ================================================

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [activeScreen, setActiveScreen] = useState("Jobs");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
 
  const handleSetActiveScreen = (screen) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveScreen(screen);
      if (location.pathname !== "/") {
        navigate("/"); // 👈 navigate to base route so Outlet is removed
      }
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (activeScreen === "Jobs" && location.pathname === "/") {
      navigate("/jobs");
    }
  }, [activeScreen, location.pathname, navigate]);

  // ============== toggle =========================================================



   const [darkMode, setDarkMode] = useState(false);
 
   
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-screen">
          {isLoading ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm backdrop-saturate-150 z-50">
              <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className=" md:col-span-3 lg:col-span-2 dark:border-zinc-800 border-zinc-200 border">
                <div className="md:hidden px-4 py-3 flex justify-between ">
                  <div className=" w-full flex items-center justify-between py-2">
                   
                    <button onClick={() => setIsDrawerOpen(true)}>
                      <i className="bi bi-list text-xl"></i>
                    </button>

            
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                      <div className="relative w-[28px] h-[28px] mr-1">
                        <img
                          className="absolute z-0"
                          src={Log}
                          alt="Background"
                        />
                        <img
                          className="absolute z-10 px-2 py-2"
                          src={Logo}
                          alt="Foreground"
                        />
                      </div>
                      <span className="font-semibold">Human R.</span>
                    </div>

                  
                   <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-1 py-1  rounded "
              >
                <i
                  className={`bi ${
                    darkMode ? "bi-brightness-low-fill" : "bi-moon-fill"
                  } text-lg`}
                ></i>
              </button>{" "}
                  </div>
                </div>
                <div className="md:hidden">
                  <Drawer
                    isOpen={isDrawerOpen}
                    size="xs"
                    onClose={() => setIsDrawerOpen(false)}
                    placement="left"
                    backdrop="opaque"
                  >
                    <DrawerContent>
                      <DrawerHeader className="flex justify-center">
                        <div className="flex relative md:justify-start justify-center items-center align-center">
                          <div className="relative w-[42px] h-[42px] mr-2">
                            <img
                              className="absolute  z-0 "
                              src={Log}
                              alt="Background"
                            />
                            <img
                              className="absolute  z-10 px-2 py-2"
                              src={Logo}
                              alt="Foreground"
                            />
                          </div>
                          <span className="font-semibold">Human R.</span>
                        </div>
                      </DrawerHeader>
                      <DrawerBody>
                        <div className="pt-3">
                          <div className=" pb-2">
                            <small className="font-semibold flex justify-between">
                              MENU
                            </small>
                            <small>
                              <ul>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Dashboard")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Dashboard"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-grid-fill"></i>
                                  <span className="px-2">Dashboard</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Message")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Message"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-chat-square-text-fill"></i>
                                  <span className="px-2">Message</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Calendar")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Calendar"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-calendar-week-fill"></i>
                                  <span className="px-2" href={null}>
                                    Calendar
                                  </span>
                                </li>
                              </ul>
                            </small>
                          </div>

                          <div className=" pt-2 pb-3">
                            <small className="font-semibold flex justify-between ">
                              RECRUITMENT
                            </small>
                            <small>
                              <ul>
                                <li
                                  onClick={() => {
                                    setIsLoading(true);
                                    setTimeout(() => {
                                      setActiveScreen("Jobs");
                                      navigate("/jobs");
                                      setIsLoading(false);
                                    }, 300);
                                  }}
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Jobs"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-briefcase-fill"></i>
                                  <span className="px-2 pointer-events-none select-none">
                                    Jobs
                                  </span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Candidate")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Candidate"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-people-fill"></i>
                                  <span className="px-2">Candidates</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Referral")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Referral"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-recycle"></i>
                                  <span className="px-2">My Referrals</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Career")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Career"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-display-fill"></i>
                                  <span className="px-2">Career Site</span>
                                </li>
                              </ul>
                            </small>
                          </div>

                          <div className=" pt-2">
                            <small className="font-semibold flex justify-between ">
                              ORGANIZATION
                            </small>
                            <small>
                              <ul>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Employee")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Employee"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-people-fill"></i>
                                  <span className="px-2">Employee</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Structure")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Structure"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-recycle"></i>
                                  <span className="px-2">Structure</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Report")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Report"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-clipboard2-data-fill"></i>
                                  <span className="px-2">Report</span>
                                </li>
                                <li
                                  onClick={() =>
                                    handleSetActiveScreen("Settings")
                                  }
                                  className={`mt-1 rounded-md p-1 transition duration-300 ${
                                    activeScreen === "Settings"
                                      ? "text-white bg-blue-600 cursor-default"
                                      : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                                  }`}
                                >
                                  <i className="bi bi-gear-wide-connected"></i>
                                  <span className="px-2">Settings</span>
                                </li>
                              </ul>
                            </small>
                          </div>
                        </div>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </div>

                <div className="hidden md:block">
                  <div className="flex relative md:justify-start justify-center items-center align-center py-6 px-6">
                    <div className="relative w-[42px] h-[42px] mr-2">
                      <img
                        className="absolute  z-0 "
                        src={Log}
                        alt="Background"
                      />
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
                      <small className="font-semibold flex justify-between">
                        MENU
                      </small>
                      <small>
                        <ul>
                          <li
                            onClick={() => handleSetActiveScreen("Dashboard")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Dashboard"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-grid-fill"></i>
                            <span className="px-2">Dashboard</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Message")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Message"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-chat-square-text-fill"></i>
                            <span className="px-2">Message</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Calendar")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Calendar"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-calendar-week-fill"></i>
                            <span className="px-2" href={null}>
                              Calendar
                            </span>
                          </li>
                        </ul>
                      </small>
                    </div>

                    <div className=" pt-2 pb-3 px-6">
                      <small className="font-semibold flex justify-between ">
                        RECRUITMENT
                      </small>
                      <small>
                        <ul>
                          <li
                            onClick={() => {
                              setIsLoading(true);
                              setTimeout(() => {
                                setActiveScreen("Jobs");
                                navigate("/jobs");
                                setIsLoading(false);
                              }, 300);
                            }}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Jobs"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-briefcase-fill"></i>
                            <span className="px-2 pointer-events-none select-none">
                              Jobs
                            </span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Candidate")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Candidate"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-people-fill"></i>
                            <span className="px-2">Candidates</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Referral")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Referral"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-recycle"></i>
                            <span className="px-2">My Referrals</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Career")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Career"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-display-fill"></i>
                            <span className="px-2">Career Site</span>
                          </li>
                        </ul>
                      </small>
                    </div>

                    <div className=" pt-2 pb-3 px-6">
                      <small className="font-semibold flex justify-between ">
                        ORGANIZATION
                      </small>
                      <small>
                        <ul>
                          <li
                            onClick={() => handleSetActiveScreen("Employee")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Employee"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-people-fill"></i>
                            <span className="px-2">Employee</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Structure")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Structure"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-recycle"></i>
                            <span className="px-2">Structure</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Report")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Report"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-clipboard2-data-fill"></i>
                            <span className="px-2">Report</span>
                          </li>
                          <li
                            onClick={() => handleSetActiveScreen("Settings")}
                            className={`mt-1 rounded-md p-1 transition duration-300 ${
                              activeScreen === "Settings"
                                ? "text-white bg-blue-600 cursor-default"
                                : "text-neutral-400 hover:text-white hover:bg-blue-600 cursor-pointer"
                            }`}
                          >
                            <i className="bi bi-gear-wide-connected"></i>
                            <span className="px-2">Settings</span>
                          </li>
                        </ul>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-screen md:col-span-9 lg:col-span-10 flex flex-col">
                <div className="flex-grow bg-slate-100 dark:bg-black pb-10">
                  {location.pathname === "/jobs" ||
                  location.pathname.startsWith("/job/") ? (
                    <Outlet />
                  ) : activeScreen === "Dashboard" ? (
                    <DashboardComponent />
                  ) : activeScreen === "Message" ? (
                    <MsgComponent />
                  ) : activeScreen === "Calendar" ? (
                    <CalComponent />
                  ) : activeScreen === "Candidate" ? (
                    <CandComponent />
                  ) : activeScreen === "Referral" ? (
                    <RefComponent />
                  ) : activeScreen === "Career" ? (
                    <CarComponent />
                  ) : activeScreen === "Employee" ? (
                    <EmpComponent />
                  ) : activeScreen === "Structure" ? (
                    <StrComponent />
                  ) : activeScreen === "Report" ? (
                    <RepComponent />
                  ) : activeScreen === "Settings" ? (
                    <SettComponent />
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dash1;
