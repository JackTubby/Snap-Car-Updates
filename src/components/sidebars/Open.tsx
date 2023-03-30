import React from "react";

import { motion } from "framer-motion";

import { MdOutlineLogout, MdOutlineFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { BsCalendar3, BsBell, BsQuestionLg } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";

const Open = () => {
  return (
    <>
      <div
        className="pb-16 space-y-2 text-center p-8"
      >
        <h2 className="pb-16">Snap Car Updates</h2>
        <>
          <div className="pb-16 space-y-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <BsBell />
              <p>Notifications</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <MdOutlineFeed />
              <p>Feed</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <IoMdStats />
              <p>Stats</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <BsCalendar3 />
              <p>Calendar</p>
            </motion.div>
          </div>
        </>
        <>
          <div className="pb-16 space-y-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <BsQuestionLg />
              <p>Get Help</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <VscFeedback />
              <p>Submit Feedback</p>
            </motion.div>
          </div>
        </>
        <>
          <div className="space-y-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <CgProfile />
              <p>Profile</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 p-2 cursor-pointer rounded-md text-gray-600 dark:text-gray-400 dark:hover:bg-slate-300/20 hover:bg-slate-300"
            >
              <MdOutlineLogout />
              <p>Sign Out</p>
            </motion.div>
          </div>
        </>
      </div>
    </>
  );
};

export default Open;
