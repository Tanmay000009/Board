"use client";

import { useState } from "react";
import { SHADOW_STYLE } from "../../Dashboard";
import Image from "next/image";
import AddProfileModal from "./Modal/AddProfileModal";
import ProfileDetails from "./ProfileDetails";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  youtube: string;
}

const ProfileCard = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {user.name === "" || user.email === "" || user.phone === "" ? (
        <>
          <div
            className={
              "h-72 w-full bg-white mt-8 rounded-xl p-4 xl:p-8 grid place-items-center  " +
              SHADOW_STYLE
            }
          >
            <div
              onClick={() => setOpenModal(true)}
              className="flex flex-col justify-center items-center gap-2 hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
            >
              <Image
                src="/icons/add.svg"
                alt="Add icon"
                width={88}
                height={88}
              />
              <p className="text-[#858585] font-figTree font-semibold text-lg ">
                Add Profile
              </p>
            </div>
          </div>
          <AddProfileModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            user={user}
            setUser={setUser}
          />
        </>
      ) : (
        <ProfileDetails user={user} />
      )}
    </>
  );
};

export default ProfileCard;
