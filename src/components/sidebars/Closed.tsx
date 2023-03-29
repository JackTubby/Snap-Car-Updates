import React from "react";

import { MdOutlineLogout, MdOutlineFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { BsCalendar3, BsBell, BsQuestionLg } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";

const Closed = () => {
  return (
    <>
      <>
        <div className="pb-16 space-y-2 text-center p-8">
          <h2 className="pb-16">Snap Car Updates</h2>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsBell />
          </div>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <MdOutlineFeed />
          </div>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <IoMdStats />
          </div>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsCalendar3 />
          </div>
        </div>
      </>
      <>
        <div className="pb-16 space-y-2">
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <BsQuestionLg />
          </div>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <VscFeedback />
          </div>
        </div>
      </>
      <>
        <div className="space-y-2">
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <CgProfile />
          </div>
          <div className="flex justify-center p-2 cursor-pointer rounded-md text-2xl text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300">
            <MdOutlineLogout />
          </div>
        </div>
      </>
    </>
  );
};

export default Closed;
