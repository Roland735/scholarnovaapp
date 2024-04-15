import React from "react";
import ArchievementBoard from "./ArchievementBoard";
import AssignmentForm from "../teacher/AssignmentForm";
import Settings from "../parent/Settings/Settings";

function AdminHome({ session }) {
    return <div className="w-full">
        <ArchievementBoard />
        <AssignmentForm session={session} />
        <Settings session={session} />
    </div>;
}

export default AdminHome;
