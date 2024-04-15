"use client";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    async function getSessionData() {
      const session = await getSession();
      setSession(session);
    }
    getSessionData();
  }, []);
  if (!session) {
    return <p>Loading...</p>;
  } else if (session.user.role === "admin") {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>
          Hi {session.user.firstname}. Welcome to your {session.user.role}{" "}
          Dashboard
        </p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  } else
    return (
      <p>
        You are not authorized to view this page. You're a {session.user.role}.
        <button onClick={() => signOut()}>Log Out</button>
      </p>
    );
}

export default Dashboard;
