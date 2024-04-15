"use client";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import TeacherLayout from "@/app/components/Universal/TeacherLayout";
import TeacherHome from "@/app/components/teacher/TeacherHome";

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
  } else if (session.user.role === "teacher") {
    return (
      <TeacherLayout
        name={session.user.firstname}
        lastname={session.user.lastname}
        role={session.user.role}
      >
        <TeacherHome session={session} />
        <button
          onClick={() =>
            signOut({ redirect: true, callbackUrl: "/auth/login" })
          }
        >
          Logout
        </button>
      </TeacherLayout>
    );
  } else
    return (
      <p>
        You are not authorized to view this page. You're a {session.user.role}.
        <button
          onClick={() =>
            signOut({ redirect: true, callbackUrl: "/auth/login" })
          }
        >
          Log Out
        </button>
      </p>
    );
}

export default Dashboard;
