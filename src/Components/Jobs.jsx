import React from "react";
import Slack from "../assets/slack.png";
import Spot from "../assets/spotify.png";
import Shaz from "../assets/shazam.png";
import Twit from "../assets/twitch.png";
import Inv from "../assets/invision.png";
import Adobe from "../assets/adobe.png";
import Kayak from "../assets/kayako.png";
import Icon from "../assets/icon1.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [jobCardsData, setJobCardsData] = useState([
    {
      id: 1,
      img: Slack,
      category: "Design",
      date: "5 July",
      designation: "Senior Product Designer",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 2,
      img: Spot,
      category: "Design",
      date: "5 July",
      designation: "UI/UX Designer",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 3,
      img: Shaz,
      category: "Design",
      date: "5 July",
      designation: "Head of UX",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 4,
      img: Twit,
      category: "Design",
      date: "5 July",
      designation: "Copywriter",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 5,
      img: Inv,
      category: "Design",
      date: "5 July",
      designation: "Junior Designer",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 6,
      img: Adobe,
      category: "Design",
      date: "5 July",
      designation: "Wordpress Developer",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
    {
      id: 7,
      img: Kayak,
      category: "Design",
      date: "5 July",
      designation: "UX Content Writer",
      location: "Dhaka, Bangladesh",
      description:
        "We are looking for a programmer with a keen eye for design...",
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "122+",
    },
  ]);

  const filteredJobs = jobCardsData.filter(
    (job) =>
      job.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate() 
  
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    category: "",
    date: "",
    designation: "",
    location: "",
    description: "",
    img: "", // <-- added
  });

  const handleAddJob = () => {
    const newId = jobCardsData.length + 1;
    const job = {
      id: newId,
      ...newJob,
      candidates: [
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
      ],
      candidateCount: "0",
    };
    setJobCardsData([...jobCardsData, job]);
    setShowForm(false);
    setNewJob({
      category: "",
      date: "",
      designation: "",
      location: "",
      description: "",
      img: "",
    });
  };

  // ============================================================

  const [activeTab, setActiveTab] = useState("active");

  const underlineRef = useRef(null);
  const activeTabRef = useRef(null);
  const unfinishedTabRef = useRef(null);
  const completedTabRef = useRef(null);

  const tabRefs = {
    active: activeTabRef,
    unfinished: unfinishedTabRef,
    completed: completedTabRef,
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
  return (
    <div>
      <div className="bg-white p-1 flex md:justify-end  justify-center">
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
          <i className="bi bi-question-circle-fill text-lg text-neutral-300 me-3"></i>
          <div className="relative inline-block">
            <i className="bi bi-bell-fill  text-lg text-neutral-300 me-3"></i>
            <span className="absolute -top-1 -right-1 me-3 bg-red-500 text-white text-[5px] min-w-[13px] h-[13px] px-1 rounded-full flex items-center justify-center ring-1 ring-white">
              15
            </span>
          </div>

          <img className="w-7 h-7 me-5" src={Icon}></img>
        </div>
      </div>
      <div className=" grid md:flex justify-center text-center md:text-start grid-cols-1 p-5 md:grid-cols-12 md:justify-between align-center">
        <div className="md:col-span-2 ">
          <div>
            <h1 className=" px-5 pb-3 md:pb-0 text-2xl font-semibold">Jobs</h1>
          </div>
        </div>
        <div className="flex justify-between md:col-span-10 text-center align-center">
          <div>
            <small>
              Sort by :{" "}
              <span className="font-semibold ">
                {" "}
                Creation date
                <input
                  type="date"
                  className="w-6 h-6 text-transparent bg-transparent border-none cursor-pointer"
                />
              </span>
            </small>
          </div>
          <div className="md:px-5">
            <small>Status:</small>
            <small>
              <select
                value={activeTab}
                onChange={(e) => handleTabClick(e.target.value.toLowerCase())}
                className="bg-transparent text-gray-700 p-1 font-semibold focus:outline-none"
              >
                <option value=" ">All Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed </option>
                <option value="Unfinished">Unfinished</option>
              </select>
            </small>
          </div>
        </div>
      </div>
      <div>
        <div className=" md:px-9 px-5 justify-center ">
          <div className="rounded-lg ">
            <div className="flex md:justify-start justify-center">
              <small>
                <ul
                  className="flex  relative border-b border-gray-200 mb-6"
                  id="myTab"
                  role="tablist"
                >
              
                  <li className="nav-item" role="presentation">
                    <button
                      ref={activeTabRef}
                      className={`py-3 items-center flex font-medium relative focus:outline-none transition-colors duration-200
      ${
        activeTab === "active"
          ? "text-green-600 font-semibold"
          : "text-gray-500 hover:text-green-600"
      }
    `}
                      id="active"
                      onClick={() => handleTabClick("active")}
                      role="tab"
                      aria-controls="active-tab-pane"
                      aria-selected={activeTab === "active"}
                    >
                      Active{" "}
                      <span className="ml-1 px-2 text-xs font-semibold rounded-full bg-green-100 text-green-500">
                        {jobCardsData.length.toString().padStart(2, "0")}
                      </span>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      ref={unfinishedTabRef}
                      className={`
                py-3 px-4 align-center items-center flex  font-medium relative focus:outline-none transition-colors duration-200
                ${
                  activeTab === "unfinished"
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }
              `}
                      id="unfinish"
                      onClick={() => handleTabClick("unfinished")}
                      role="tab"
                      aria-controls="unfinish-tab-pane"
                      aria-selected={activeTab === "unfinished"}
                    >
                      Unfinished{" "}
                      <span className="ml-1 px-2  text-xs font-semibold rounded-full bg-green-100 text-green-500">
                        50
                      </span>
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      ref={completedTabRef}
                      className={`
                py-3 px-4 flex align-center items-center font-medium relative focus:outline-none transition-colors duration-200
                ${
                  activeTab === "completed"
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-600"
                }
              `}
                      id="complete"
                      onClick={() => handleTabClick("completed")}
                      role="tab"
                      aria-controls="complete-tab-pane"
                      aria-selected={activeTab === "completed"}
                    >
                      Completed{" "}
                      <span className="ml-1 px-2  text-xs font-semibold rounded-full  bg-green-100 text-green-500">
                        48
                      </span>
                    </button>
                  </li>

                  <div
                    ref={underlineRef}
                    className="absolute bottom-[-1px] h-0.5 bg-green-500 transition-all duration-300 ease-in-out"
                    style={{ width: "0px", left: "0px" }}
                  ></div>
                </ul>
              </small>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className={` bg-gray-100 rounded-md ${
                  activeTab === "active" ? "block" : "hidden"
                }`}
                id="active"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="font-sans bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                    {filteredJobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg shadow-md p-4"
                         onClick={() => navigate(`/job/${job.id}`, { state: job })}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <img
                              src={job.img}
                              alt="Company logo"
                              className="w-8 h-8 mr-2"
                            />
                          </div>
                          <div className="text-gray-500 text-xs">
                            {job.date}
                          </div>
                        </div>
                        <span className="text-gray-500 text-xs">
                          {job.category}
                        </span>
                        <h2 className="text-md font-bold ">
                          {job.designation}
                        </h2>
                        <p className="text-gray-600 text-sm mb-3">
                          {job.location}
                        </p>
                        <p className="text-gray-700 text-xs mb-4 line-clamp-3">
                          {job.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex -space-x-3 overflow-hidden">
                            {job.candidates.map((candidateImg, index) => (
                              <img
                                key={index}
                                className="inline-block h-7 w-7 rounded-full ring-1 ring-white" // Slightly smaller avatars
                                src={candidateImg}
                                alt={`Candidate ${index + 1}`}
                              />
                            ))}
                            {job.candidateCount &&
                              job.candidates.length === 3 && (
                                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-200 text-gray-600 text-xs font-semibold ring-1 ring-white">
                                  +
                                </div>
                              )}
                          </div>
                          <span className="text-gray-500 text-xs">
                            {job.candidateCount} Candidates
                          </span>
                        </div>
                      </div>
                    ))}

                    <div
                      onClick={() => setShowForm(true)}
                      className=" bg-white rounded-lg shadow-md p-4 flex items-center justify-center flex-col text-center border-2 border-dashed border-gray-300 text-gray-500"
                    >
                      <svg
                        className="w-10 h-10 mb-3 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                      <p className="text-md text-green-500 font-semibold">
                        Create New Job
                      </p>
                    </div>

                    {showForm && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                          <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                            onClick={() => setShowForm(false)}
                          >
                            &times;
                          </button>
                          <h2 className="text-lg font-semibold mb-4">
                            Post a New Job
                          </h2>
                          <input
                            type="text"
                            placeholder="Image URL (optional)"
                            className="w-full border p-2 rounded mb-3"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                img: e.target.value,
                              })
                            }
                          />

                          <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Upload Image
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  const imageUrl = URL.createObjectURL(file);
                                  setNewJob({
                                    ...newJob,
                                    img: imageUrl,
                                  });
                                }
                              }}
                            />
                          </div>

                          {newJob.img && (
                            <div className="mb-4">
                              <img
                                src={newJob.img}
                                alt="Job Preview"
                                className="h-20 w-20 object-cover rounded-full"
                              />
                            </div>
                          )}
                          <input
                            type="text"
                            placeholder="Category"
                            className="w-full border p-2 rounded mb-3"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                category: e.target.value,
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Date"
                            className="w-full border p-2 rounded mb-3"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                date: e.target.value,
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Designation"
                            className="w-full border p-2 rounded mb-3"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                designation: e.target.value,
                              })
                            }
                          />
                          <input
                            type="text"
                            placeholder="Location"
                            className="w-full border p-2 rounded mb-3"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                location: e.target.value,
                              })
                            }
                          />
                          <textarea
                            placeholder="Description"
                            className="w-full border p-2 rounded mb-4"
                            onChange={(e) =>
                              setNewJob({
                                ...newJob,
                                description: e.target.value,
                              })
                            }
                          />
                          <button
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                            onClick={handleAddJob}
                          >
                            Add Job
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`bg-gray-100 rounded-md ${
                  activeTab === "unfinished" ? "block" : "hidden"
                }`}
                id="unfinish"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Unfinished Jobs Content
                </h2>
                <p className="text-gray-700">
                  Here are the details for your 50 unfinished jobs.
                </p>
              </div>

              <div
                className={`bg-gray-100 rounded-md ${
                  activeTab === "completed" ? "block" : "hidden"
                }`}
                id="complete"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <h2 className="text-xl font-semibold mb-2">
                  Completed Jobs Content
                </h2>
                <p className="text-gray-700">
                  Congratulations! You have completed 48 jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
