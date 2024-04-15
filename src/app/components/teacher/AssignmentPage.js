import React from "react";
import AssignmentCard from "./AssignmentCard";
import AssignmentForm from "./AssignmentForm";

function AssignmentPage({ session }) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row flex-wrap py-3 justify-between items-center w-full">
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
        <AssignmentCard />
      </div>
      <div className="">
        <AssignmentForm session={session} />
      </div>
    </div>
  );
}

export default AssignmentPage;
