import React from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

function AssignmentCard() {
  return (
    <div className="h-30 my-7 dark:bg-slate-950 px-2 py-5 rounded-xl shadow-md flex flex-col mx-3 justify-between w-4/5 sm:w-1/3 lg:w-2/5 xl:w-1/5 ">
      <div className="flex text-xl font-sbold text-white justify-between mb-3">
        <div className="text-md">Average Mark</div>
        <div className="text-cyan-200">
          <BsFillFileEarmarkTextFill />
        </div>
      </div>
      <div className="text-2xl">86.89%</div>
      <div className="text-sm text-cyan-200">+5% from last Month</div>
    </div>
  );
}

export default AssignmentCard;
