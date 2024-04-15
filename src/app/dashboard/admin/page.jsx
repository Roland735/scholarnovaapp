"use client";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import AdminLayout from "@/app/components/Universal/AdminLayout";
import AdminHome from "@/app/components/admin/AdminHome";
import MobileNavbar from "@/app/components/Universal/MobileNavbar";

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
      <AdminLayout
        name={session.user.firstname}
        lastname={session.user.lastname}
        role={session.user.role}
      >
        <MobileNavbar />
        <div className="md:flex justify-between px-5 py-3 w-full items-center  shadow-2xl light-border">
          <AdminHome session={session} />
        </div>
        <button
          onClick={() =>
            signOut({ redirect: true, callbackUrl: "/auth/login" })
          }
        >
          Logout
        </button>
      </AdminLayout>
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
