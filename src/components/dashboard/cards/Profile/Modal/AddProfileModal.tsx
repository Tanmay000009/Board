"use client";

import { use, useEffect, useState } from "react";
import CancelIcon from "../../../../icons/CancelIcon";
import ModalNavItem from "./ModalNavItem";
import ModalPage1 from "./ModalPage1";
import { IUser } from "../ProfileCard";
import ModalPage2 from "./ModalPage2";

export interface IErros {
  name: boolean;
  email: boolean;
  phone: boolean;
}

const AddProfileModal = ({
  openModal,
  setOpenModal,
  user,
  setUser,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}) => {
  const [tempUser, setTempUser] = useState<IUser>(user);
  const [page, setPage] = useState(1 as 1 | 2);

  const [errors, setErrors] = useState<IErros>({
    name: false,
    email: false,
    phone: false,
  });

  const page1Next = () => {
    const tempErrors = {
      name: false,
      email: false,
      phone: false,
      instagram: false,
      youtube: false,
    };

    if (
      tempUser.name === "" ||
      tempUser.name === " " ||
      tempUser.name.length === 0
    ) {
      tempErrors.name = true;
    }
    if (
      tempUser.email === "" ||
      tempUser.email === " " ||
      tempUser.email.length === 0
    ) {
      tempErrors.email = true;
    }
    if (
      tempUser.phone === "" ||
      tempUser.phone === " " ||
      tempUser.phone.length === 0
    ) {
      tempErrors.phone = true;
    }

    setErrors(tempErrors);

    if (tempErrors.name || tempErrors.email || tempErrors.phone) {
      return;
    }

    setPage(2);
  };

  const page2Next = () => {
    setUser(tempUser);

    setPage(1);
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
    setTempUser(user);
    setPage(1);
    setErrors({
      name: false,
      email: false,
      phone: false,
    });
  };

  return (
    <div
      id="profileModal"
      tabIndex={-1}
      className={
        "fixed left-0 top-0 z-50 w-full p-4 overflow-x-hidden bg-[#000000] bg-opacity-50 overflow-y-auto md:inset-0 h-full" +
        (openModal ? " " : " hidden")
      }
    >
      <div className="relative w-full h-full grid place-items-center">
        <div className="relative bg-white w-4/5 sm:w-2/3 md:w-1/2 rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b border-[#F2F2F2] rounded-t ">
            <h3 className="text-xl font-figTree font-semibold text-gray-900 ">
              Add New Profile
            </h3>
            <button
              type="button"
              className=" bg-transparent hover:bg-gray-200  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={closeModal}
            >
              <CancelIcon />
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6">
            <div className="w-full flex flex-row gap-2">
              <ModalNavItem name="Basic" active={page === 1} />
              <ModalNavItem name="Social" active={page === 2} />
            </div>
            {page === 1 ? (
              <ModalPage1
                user={tempUser}
                setUser={setTempUser}
                errors={errors}
                setErrors={setErrors}
              />
            ) : (
              <ModalPage2 user={tempUser} setUser={setTempUser} />
            )}
          </div>

          {page === 1 ? (
            <div className="flex flex-row-reverse items-center p-6 space-x-2 border-t border-[#F2F2F2] rounded-b ">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-[#3E84F8]  font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 "
                onClick={page1Next}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="flex flex-row-reverse items-center gap-4 p-6 space-x-2 border-t border-[#F2F2F2] rounded-b ">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-[#3E84F8]  font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 "
                onClick={page2Next}
              >
                Done
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-black bg-white border border-[#999CA0]  font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 "
                onClick={() => setPage(1)}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProfileModal;
