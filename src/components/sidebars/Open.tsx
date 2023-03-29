import React from "react";

import { MdOutlineLogout, MdOutlineFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { BsCalendar3, BsBell, BsQuestionLg } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";

const Open = () => {
  return (
    <>
      <>
        <div className="pb-16 space-y-2">
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsBell />
            <p>Notifications</p>
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <MdOutlineFeed />
            <p>Feed</p>
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <IoMdStats />
            <p>Stats</p>
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsCalendar3 />
            <p>Calendar</p>
          </div>
        </div>
      </>
      <>
        <div className="pb-16 space-y-2">
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsQuestionLg />
            <p>Get Help</p>
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <VscFeedback />
            <p>Submit Feedback</p>
          </div>
        </div>
      </>
      <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <CgProfile />
            <p>Profile</p>
          </div>
          <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <MdOutlineLogout />
            <p>Sign Out</p>
          </div>
        </div>
      </>
    </>
  );
};

export default Open;
