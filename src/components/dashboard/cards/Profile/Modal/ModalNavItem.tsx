import { IErros } from "./AddProfileModal";

const ModalNavItem = ({ name, active }: { name: string; active: boolean }) => {
  return (
    <div className="basis-1/2 flex flex-col gap-2 items-center">
      <h4 className="font-figTree font-semibold text-lg ">{name}</h4>
      <div
        className={
          "w-full h-1 rounded-lg " +
          (active ? " bg-[#3F84F8] " : "bg-[#D9D9D9]")
        }
      ></div>
    </div>
  );
};

export default ModalNavItem;
