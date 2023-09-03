"use client";

import { useEffect } from "react";
import DashboardComponent from "../../components/dashboard/Dashboard";
import Navbar from "../../components/dashboard/nav/Navbar";
import NavbarMobile from "../../components/dashboard/nav/NavbarMobile";
import { auth } from "../../app/utils/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  // redirect to login if not logged in
  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/auth");
    }
  }, []);

  return (
    <>
      <main className="sm:flex bg-[#F8FAFF] h-screen w-screen hidden flex-row">
        <Navbar />
        <div className="overflow-scroll flex-grow">
          <DashboardComponent />
        </div>
      </main>
      <main className="sm:hidden bg-[#F8FAFF] h-screen w-screen flex flex-col">
        <NavbarMobile />
        <div className="overflow-scroll flex-grow">
          <DashboardComponent />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
