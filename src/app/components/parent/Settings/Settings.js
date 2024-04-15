import React from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Health from "./Health";
import Feedback from "./Feedback";
import Guardian1 from "./Guardian1";
import Guardian2 from "./Guadian2";

function Settings({ session }) {
  return (
    <div className="flex flex-col space-y-8 text-slate-50">
      <Profile session={session} />
      <Contact session={session} />
      <Health session={session} />
      <Feedback session={session} />
      <Guardian1 session={session} />
      <Guardian2 session={session} />

    </div>
  );
}

export default Settings;
