import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ description, filesize, radiovalue, refscr, remove }) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragElastic={1}
      dragConstraints={refscr}
      className="card flex relative flex-col h-64 w-52 mt-2 bg-black truncate rounded-[30px] px-4 py-6"
    >
      <FaRegFileCode className="text-white h-6 w-5 p-1" />
      <p className="text-white text-wrap w-[100%] mt-2 h-[100px] overflow-y-scroll custom-scrollbar">
        {description}
      </p>
      <div className="flex justify-between items-center h-[20px] mt-6">
        <h4 className="text-white">{filesize}</h4>
        <IoIosClose onClick={remove} className="text-white bg-neutral-800 h-6 w-6 rounded-full" />
      </div>
      <h3
        className={`footer flex justify-center items-center absolute ${
          radiovalue === "Download Now"
            ? "bg-red-600"
            : radiovalue === "Upload Now"
            ? "bg-blue-600"
            : radiovalue === "Post Now"
            ? "bg-purple-600"
            : "bg-white"
        } left-0 bottom-0 w-[100%] font-semibold text-white h-10`}
      >
        {radiovalue}
      </h3>
    </motion.div>
  );
};

export default Card;
