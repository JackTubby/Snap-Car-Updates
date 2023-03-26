import React from "react";

import { MdOutlineLogout, MdOutlineFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { GrHelp } from "react-icons/gr";
import { BsCalendar3, BsBell } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";

const Open = () => {
  return (
    <>
      <div className="pb-16 space-y-2">
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <BsBell />
          <p>Notifications</p>
        </div>
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <MdOutlineFeed />
          <p>Feed</p>
        </div>
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <IoMdStats />
          <p>Stats</p>
        </div>
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <BsCalendar3 />
          <p>Calendar</p>
        </div>
      </div>
      <div className="pb-16 space-y-2">
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <GrHelp />
          <p>Get Help</p>
        </div>
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <VscFeedback />
          <p>Submit Feedback</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <CgProfile />
          <p>Profile</p>
        </div>
        <div className="flex items-center space-x-2 p-2 cursor-pointer rounded-md hover:bg-slate-300/20">
          <MdOutlineLogout />
          <p>Sign Out</p>
        </div>
      </div>
    </>
  );
};

export default Open;
