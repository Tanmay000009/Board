import Image from "next/image";
import { SHADOW_STYLE } from "../../Dashboard";
import AddProfileModal from "./Modal/AddProfileModal";
import { IUser } from "./ProfileCard";

const ProfileDetails = ({ user }: { user: IUser }) => {
  return (
    <div
      className={
        "basis-1/2 h-72 w-full bg-white mt-8 rounded-xl px-8 md:px-4 lg:px-8 py-12 md:py-8 xl:py-12 flex flex-col " +
        SHADOW_STYLE
      }
    >
      <div className="flex flex-col h-full w-full justify-between gap-4 ">
        <h2 className="font-figTree font-semibold text-2xl ">{user.name}</h2>
        <div className="flex flex-col-reverse gap-2 h-full w-full">
          <div className="flex flex-row md:flex-col xl:flex-row gap-4">
            <div className="flex flex-col w-full gap-4 xl:gap-8 basis-1/2">
              <div className="basis-1/2 flex flex-row justify-start items-center gap-2">
                <div className="grid place-items-center h-8 w-8 bg-[#E9F9EB] rounded-full">
                  <Image
                    src="/icons/phone.png"
                    alt="Phone icon"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-figTree text-sm lg:text-base underline">
                  {user.phone}
                </p>
              </div>
              <div className="basis-1/2 flex flex-row justify-start items-center gap-2">
                <div className="grid place-items-center h-8 w-8 bg-[#E9F9EB] rounded-full">
                  <Image
                    src="/icons/mail.svg"
                    alt="E-Mail icon"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-figTree text-sm lg:text-base underline">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-4 xl:gap-8 basis-1/2">
              <div className="basis-1/2 flex flex-row justify-start items-center gap-2">
                <div className="grid place-items-center h-8 w-8 bg-[#E9F9EB] rounded-full">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram icon"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-figTree text-sm lg:text-base underline">
                  {user.instagram && user.instagram !== ""
                    ? user.instagram
                    : "Not available"}
                </p>
              </div>
              <div className="basis-1/2 flex flex-row justify-start items-center gap-2">
                <div className="grid place-items-center h-8 w-8 bg-[#E9F9EB] rounded-full">
                  <Image
                    src="/icons/youtube.svg"
                    alt="Youtube icon"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="font-figTree text-sm lg:text-base underline">
                  {user.youtube && user.youtube !== ""
                    ? user.youtube
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
