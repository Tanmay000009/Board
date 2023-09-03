"use client";

import { IUser } from "../ProfileCard";

const ModalPage2 = ({
  user,
  setUser,
}: {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="instagram"
          className="block mb-2 text-base  font-figTree font-normal  "
        >
          Instagram Link <span className="text-[#999CA0]">(Optional)</span>
        </label>
        <input
          type="text"
          id="instagram"
          className={
            " border text-base  border-[#F2F2F2] font-figTree rounded-lg block w-full p-2.5 " +
            (user.name === "" ? "text-[#999CA0] " : "text-black ")
          }
          value={user.instagram}
          placeholder="Eg. ..instagram.com/username"
          onChange={(e) => setUser({ ...user, instagram: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="youtube"
          className="block mb-2 text-base  font-figTree font-normal  "
        >
          Youtube Link <span className="text-[#999CA0]">(Optional)</span>
        </label>
        <input
          type="text"
          id="youtube"
          className={
            " border text-base  border-[#F2F2F2] font-figTree rounded-lg block w-full p-2.5 " +
            (user.youtube === "" ? "text-[#999CA0] " : "text-black ")
          }
          placeholder="Eg. ..youtebe/username"
          value={user.youtube}
          onChange={(e) => setUser({ ...user, youtube: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ModalPage2;
