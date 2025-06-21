import React from "react";
import Button from "../Components/Button";
import Icon from "../assets/icon1.png";
import { Card, CardBody } from "@heroui/react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Jobs2 = () => {
  const [activeTab, setActiveTab] = useState("candidate");

  // ================================================================

  const [darkMode, setDarkMode] = useState(() => {
   
    return sessionStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    sessionStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  const underlineRef = useRef(null);
  const candidateTabRef = useRef(null);
  const jobDetailTabRef = useRef(null);
  const NotesTabRef = useRef(null);
  const HireTabRef = useRef(null);
  const SettingsTabRef = useRef(null);

  const tabRefs = {
    candidate: candidateTabRef,
    jobDetail: jobDetailTabRef,
    notes: NotesTabRef,
    hire: HireTabRef,
    settings: SettingsTabRef,
  };

  useEffect(() => {
    const currentTabElement = tabRefs[activeTab]?.current;

    if (currentTabElement && underlineRef.current) {
      const { offsetWidth, offsetLeft } = currentTabElement;

      underlineRef.current.style.width = `${offsetWidth}px`;
      underlineRef.current.style.left = `${offsetLeft}px`;
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // ===============================================================
  const navigate = useNavigate();
  const { state: job } = useLocation(); // Get passed job data

  if (!job) {
    return <p className="text-center mt-10">No job data found.</p>;
  }

  

  // ================================================================
  const candidatesData = {
    "New Applied": [
      {
        id: 1,
        name: "Jane Cooper",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/FF5733/FFFFFF?text=JC",
      },
      {
        id: 2,
        name: "Wade Warren",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/33FF57/FFFFFF?text=WW",
      },
      {
        id: 3,
        name: "Jenny Wilson",
        role: "UI/UX Designer",
        rating: 5,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/3357FF/FFFFFF?text=JW",
      },
      {
        id: 4,
        name: "Jacob Jones",
        role: "UI/UX Designer",
        rating: 3,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/FF33A1/FFFFFF?text=JJ",
      },
    ],
    Shortlisted: [
      {
        id: 5,
        name: "Esther Howard",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/F7DC6F/FFFFFF?text=EH",
      },
      {
        id: 6,
        name: "Robert Fox",
        role: "UI/UX Designer",
        rating: 5,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/8E44AD/FFFFFF?text=RF",
      },
      {
        id: 7,
        name: "Kristin Watson",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/1ABC9C/FFFFFF?text=KW",
      },
      {
        id: 8,
        name: "Jacob Jones",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/2ECC71/FFFFFF?text=JJ",
      },
    ],
    Interview: [
      {
        id: 9,
        name: "Robert Fox",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/E74C3C/FFFFFF?text=RF",
      },
      {
        id: 10,
        name: "Kristin Watson",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/9B59B6/FFFFFF?text=KW",
      },
    ],
    Test: [
      {
        id: 11,
        name: "Jacob Jones",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/3498DB/FFFFFF?text=JJ",
      },
    ],
    Hired: [
      {
        id: 12,
        name: "Cody Fisher",
        role: "UI/UX Designer",
        rating: 4,
        lastUpdated: "2 days ago",
        avatar: "https://placehold.co/150x150/27AE60/FFFFFF?text=CF",
      },
    ],
  };

  const getColors = (title) => {
    const map = {
      "New Applied": ["text-blue-600", "border-blue-600"],
      Shortlisted: ["text-teal-600", "border-teal-600"],
      Interview: ["text-red-600", "border-red-600"],
      Test: ["text-blue-600", "border-blue-600"],
      Hired: ["text-green-600", "border-green-600"],
    };
    return map[title] || ["text-gray-800", "border-gray-800"];
  };

  return (
    <div>
      <div
        className=" bg-white  dark:bg-black  dark:border dark:border-white/10 
                   "
      >
        <small className=" md:p-1 py-2 flex md:justify-end justify-center">
          <div>
            <input
              type="text"
              placeholder="Search for anything"
              className=" my-2 md:h-7 h-5 rounded-l-lg dark:bg-gray-700 dark:placeholder:text-gray-200 placeholder:text-xs placeholder:px-4 focus:outline-none focus:ring-1 focus:ring-slate-200"
            />
            <button className="bg-blue-600  hover:bg-blue-800 text-white md:px-4 px-1 me-3 md:h-7 rounded-r-lg">
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
      <div className="grid md:grid-cols-12 items-center pt-5 md:px-7 gap-y-3 flex">
        <div className="col-span-12 md:col-span-6 flex items-start items-center justify-center md:justify-start">
          <div className="me-5 " onClick={() => navigate(-1)}>
            <i className="bi bi-chevron-left bg-white px-2 py-1.5 rounded-full dark:bg-black dark:border dark:border-zinc-700"></i>
          </div>
          <div>
            <small className="font-semibold">
              <p className="text-gray-400">{job.category}</p>
              <p className="lg:text-lg text-md">{job.designation}</p>
              <p className="text-gray-400 text-md">
                designresources.io <i className="bi bi-dot"></i> Full time
              </p>
            </small>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex  md:text-end justify-center md:justify-end">
          <Button intent="secondary" size="xs">
            Pineline View
          </Button>
          &nbsp;&nbsp;
          <Button size="xs">Table View</Button>
        </div>
      </div>

      <div className="md:px-7 px-5  pt-5">
        <div className="rounded-lg">
          <div className="flex md:justify-start justify-center">
            <small>
              <ul
                className=" md:flex  justify-center md:justify-start relative  border-b border-gray-200 mb-5"
                id="myTab"
                role="tablist"
              >
                {[
                  {
                    label: "Candidates",
                    key: "candidate",
                    ref: candidateTabRef,
                  },
                  {
                    label: "Job & Details",
                    key: "jobDetail",
                    ref: jobDetailTabRef,
                  },
                  {
                    label: "Timeline & Notes",
                    key: "notes",
                    ref: NotesTabRef,
                  },
                  { label: "Hiring Team", key: "hire", ref: HireTabRef },
                  {
                    label: "Settings",
                    key: "settings",
                    ref: SettingsTabRef,
                  },
                ].map(({ label, key, ref }) => (
                  <li
                    key={key}
                    className="nav-item cursor-grab"
                    role="presentation"
                  >
                    <button
                      ref={ref}
                      className={`py-3 px-4 flex items-center font-medium transition-colors duration-200 focus:outline-none ${
                        activeTab === key
                          ? "text-green-600 font-semibold"
                          : "text-gray-400 hover:text-green-600"
                      }`}
                      onClick={() => handleTabClick(key)}
                      role="tab"
                      aria-selected={activeTab === key}
                    >
                      {label}
                    </button>
                  </li>
                ))}

                <div
                  ref={underlineRef}
                  className="absolute bottom-[-1px] h-0.5 bg-green-500 transition-all duration-300 ease-in-out"
                  style={{ width: "0px", left: "0px" }}
                ></div>
              </ul>
            </small>
          </div>

          <div
            className={`${activeTab === "candidate" ? "block" : "hidden"}`}
            role="tabpanel"
          >
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
              {Object.entries(candidatesData).map(([title, candidates]) => {
                const [textColor, borderColor] = getColors(title);

                return (
                  <Card
                    key={title}
                    className="bg-white  dark:bg-gradient-to-br dark:from-gray-800 dark:to-black shadow-md rounded-lg  cursor-grab  hover:scale-95"
                  >
                    <CardBody>
                    
                      <div
                        className={`flex justify-between items-center mb-3 mt-1  border-t-2 rounded-md p-1 ${borderColor}`}
                      >
                        <h2
                          className={`text-md font-semibold ${textColor} pb-1 pt-1`}
                        >
                          {title}
                        </h2>
                        <span className="bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                          {candidates.length}
                        </span>
                      </div>

                  
                      <div className="space-y-3">
                        {candidates.map((candidate) => (
                          <Card
                            key={candidate.id}
                            className="bg-white border border-gray-100 dark:border-gray-700  dark:bg-gradient-to-br  dark:from-gray-900 dark:to-black  dark:border dark:border-white/10 
                    dark:shadow-inner dark:shadow-white/10 rounded-lg shadow-sm "
                          >
                            <CardBody className="space-y-1">
                              <div className="flex space-x-4 items-center">
                                <img
                                  className="h-7 w-7 rounded-full"
                                  src={candidate.avatar}
                                  alt={candidate.name}
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/150x150/cccccc/000000?text=${candidate.name.charAt(
                                      0
                                    )}`;
                                  }}
                                />
                                <div className="grid">
                                  <p className="text-gray-800 font-medium text-sm dark:text-gray-400">
                                    {candidate.name}
                                  </p>
                                  <p className="text-gray-500 text-xs">
                                    {candidate.role}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={`bi ${
                                      i < candidate.rating
                                        ? "bi-star-fill text-yellow-500"
                                        : "bi-star text-gray-300"
                                    } text-[10px]`}
                                  ></i>
                                ))}
                                <span className="ml-2 text-gray-400 text-[10px]">
                                  {candidate.lastUpdated}
                                </span>
                              </div>
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>

          {["jobDetail", "notes", "hire", "settings"].map((key) => (
            <div
              key={key}
              className={`bg-gray-100 rounded-md ${
                activeTab === key ? "block" : "hidden"
              }`}
              role="tabpanel"
            >
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h2>
              <p className="text-gray-700">Content goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs2;
