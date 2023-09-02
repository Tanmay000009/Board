"use client";

import Image from "next/image";
import NotificationIcon from "../icons/NotificationIcon";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

const DashboardNav = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="flex flex-row justify-between items-end">
      <h1 className="font-mont font-bold text-xl">Dashboard</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <SearchBar />
        <NotificationIcon />
        <Image
          src={"/assets/user.png"}
          alt="Profile"
          width={width > 768 ? "32" : "24"}
          height={width > 768 ? "32" : "24"}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
