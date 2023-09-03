"use client";

import Image from "next/image";
import NotificationIcon from "../../icons/NotificationIcon";
import FooterItem from "./FooterItem";
import NavItem from "./NavItem";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../app/utils/firebase";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const logout = () => {
    signOut(auth).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <>
      <nav className="basis-1/12 flex flex-row justify-between  rounded-2xl m-4 p-4 bg-gradient-to-b from-[#4285F4] from-40% to-[#286DE0]">
        <Image
          src={"/assets/user.png"}
          alt="Profile"
          width={"36"}
          height={"36"}
          className=" rounded-full cursor-pointer"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        />
        <h1 className="text-white font-mont font-bold text-3xl">Board.</h1>
        <div className="flex flex-row justify-center items-center gap-2">
          <NotificationIcon />

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white text-sm rounded-lg hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={
          " flex-row justify-between items-start rounded-2xl m-4 p-4 bg-gradient-to-b from-[#4285F4] from-40% to-[#286DE0]" +
          (menuOpen ? " flex  " : " hidden")
        }
        id="nav"
      >
        <div className="flex flex-col gap-4 ">
          <NavItem title="Dashboard" active={true} />
          <NavItem title="Transactions" active={false} />
          <NavItem title="Schedules" active={false} />
          <NavItem title="Users" active={false} />
          <NavItem title="Settings" active={false} />
        </div>
        <div className="flex flex-col-reverse gap-2 h-full">
          <FooterItem title="Contact Us" />
          <FooterItem title="Help" />
        </div>
      </div>
      <div
        className={
          " flex-row justify-between items-start  rounded-2xl m-4 p-4 bg-gradient-to-b from-[#4285F4] from-40% to-[#286DE0]" +
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
    </>
  );
};

export default NavbarMobile;
