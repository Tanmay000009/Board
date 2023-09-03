"use client";

import { IUser } from "../ProfileCard";
import { IErros } from "./AddProfileModal";

const ModalPage1 = ({
  user,
  setUser,
  errors,
  setErrors,
}: {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  errors: IErros;
  setErrors: React.Dispatch<React.SetStateAction<IErros>>;
}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-base font-figTree font-normal  "
        >
          Enter Name*
        </label>
        <input
          type="text"
          id="name"
          className={
            " border text-base  font-figTree rounded-lg block w-full p-2.5 " +
            (user.name === "" ? "text-[#999CA0] " : "text-black ") +
            (!errors.name ? "border-[#F2F2F2] " : " border-[#FF0000]")
          }
          value={user.name}
          placeholder="Eg. John Doe"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
            setErrors({ ...errors, name: false });
          }}
        />
        {errors.name && (
          <p className="text-[#FF0000] text-xs font-figTree font-normal mt-1">
            Name is required.
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-base  font-figTree font-normal  "
        >
          Enter Email*
        </label>
        <input
          type="email"
          id="email"
          className={
            " border text-base  font-figTree rounded-lg block w-full p-2.5 " +
            (user.email === "" ? "text-[#999CA0] " : "text-black ") +
            (!errors.email ? "border-[#F2F2F2] " : " border-[#FF0000]")
          }
          placeholder="Eg. xyz@company.com"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setErrors({ ...errors, email: false });
          }}
        />
        {errors.email && (
          <p className="text-[#FF0000] text-xs font-figTree font-normal mt-1">
            Email is required.
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-base  font-figTree font-normal  "
        >
          Enter Phone*
        </label>
        <input
          type="phone"
          id="phone"
          className={
            " border text-base  font-figTree rounded-lg block w-full p-2.5 " +
            (user.phone === "" ? "text-[#999CA0] " : "text-black ") +
            (!errors.phone ? "border-[#F2F2F2] " : " border-[#FF0000]")
          }
          placeholder="Eg. 0123456789"
          value={user.phone}
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value });
            setErrors({ ...errors, phone: false });
          }}
        />
        {errors.phone && (
          <p className="text-[#FF0000] text-xs font-figTree font-normal mt-1">
            Phone is required.
          </p>
        )}
      </div>
    </div>
  );
};

export default ModalPage1;
