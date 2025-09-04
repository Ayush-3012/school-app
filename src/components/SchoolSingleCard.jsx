"use client";

import { FaCity, FaSchool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

const SchoolSingleCard = ({ school }) => {
  return (
    <>
      <motion.div
        className="shadow-[1px_1px_20px] flex flex-col justify-center items-center bg-rose-200 shadow-black rounded-lg p-4 relative group hover:-translate-y-1.5 duration-150"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.6 }}
      >
        <div className="flex relative  justify-center group-hover:scale-[1.025] duration-200">
          <Image
            src={school?.image}
            alt="School Image"
            width={100}
            height={100}
            className="rounded-xl w-64 h-80 shadow-[1px_1px_10px] shadow-black group-hover:scale-[1.05] duration-200"
          />
        </div>
        <div className="mt-3 w-full bg-gradient-to-tl from-white via-slate-50 to-gray-100 rounded-lg shadow-inner shadow-gray-800 p-3 flex flex-col gap-2 text-gray-900">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <FaSchool className="text-rose-500 text-2xl" />
            <span>{school?.name}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm">
              <MdLocationOn className="text-rose-500 text-xl" />
              <span>{school?.address}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <FaCity className="text-rose-500 text-xl" />
              <span>
                {school?.city}, {school?.state}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SchoolSingleCard;
