import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

function Card({ data }) {
  return (
    <div className=" relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight    mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full   left-0  ">
        <div className="flex items-center justify-between  px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className="tag w-full bg-green-600 py-4 flex items-center justify-center">
            <h3 className="text-md ">Download now</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
