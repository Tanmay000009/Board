"use client";

import Image from "next/image";
import NotificationIcon from "../icons/NotificationIcon";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../app/utils/firebase";

const DashboardNav = () => {
  const [width, setWidth] = useState(0);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="flex flex-row justify-between items-end">
      <h1 className="font-mont font-bold text-xl">Dashboard</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <SearchBar />
        <div className="hidden sm:flex">
          <NotificationIcon />
        </div>
        <Image
          src={"/assets/user.png"}
          alt="Profile"
          width={width > 768 ? "32" : "24"}
          height={width > 768 ? "32" : "24"}
          className="hidden sm:flex rounded-full cursor-pointer"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        />
      </div>
      <div
        className={
          " fixed z-10 top-16 w-48 h-32 right-0 flex-row justify-between items-start  rounded-2xl m-4 p-4 bg-gradient-to-b from-[#4285F4] from-40% to-[#286DE0]" +
          (profileMenuOpen ? " flex  " : " hidden")
        }
        id="nav"
      >
        <div className="flex flex-col gap-4 py-2 ">
          <button
            className={
              "text-white font-mont   text-base cursor-pointer hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 "
            }
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
