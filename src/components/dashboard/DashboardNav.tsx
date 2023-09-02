import Image from "next/image";
import NotificationIcon from "../icons/NotificationIcon";
import SearchBar from "./SearchBar";

const DashboardNav = () => {
  return (
    <div className="flex flex-row justify-between items-end">
      <h1 className="font-mont font-bold text-xl">Dashboard</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <SearchBar />
        <NotificationIcon />
        <Image
          src={"/assets/user.png"}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
