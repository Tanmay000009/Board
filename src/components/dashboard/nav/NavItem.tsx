const NavItem = ({ title, active }: { title: string; active: boolean }) => {
  return (
    <h2
      className={
        "text-white font-mont  text-base cursor-pointer hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100 " +
        (active ? "font-bold" : "font-normal")
      }
    >
      {title}
    </h2>
  );
};

export default NavItem;
