import React, { useState } from "react";
import Card_bg from "./Card_bg";

const BG = () => {
  return (
    <div className=" relative h-full w-screen bg-neutral-800 flex flex-wrap gap-3 overflow-y-scroll custom-scrollbar  ">
      <h1 className="absolute top-40 right-[50%] translate-x-[50%] text-gray-500 ">
        Documents.
      </h1>
      <h1 className=" absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] text-9xl font-semibold text-zinc-950 ">
        Docs.
      </h1>
      <Card_bg />
    </div>
  );
};

export default BG;
