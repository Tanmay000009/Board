import FooterItem from "./FooterItem";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="basis-1/6 flex flex-col justify-between  rounded-2xl my-8 ml-8 px-8 py-12  bg-gradient-to-b from-[#4285F4] from-40% to-[#286DE0]">
      <div>
        <h1 className="text-white font-mont font-bold text-3xl">Board.</h1>
        <div className="flex flex-col gap-4 mt-8">
          <NavItem title="Dashboard" active={true} />
          <NavItem title="Transactions" active={false} />
          <NavItem title="Schedules" active={false} />
          <NavItem title="Users" active={false} />
          <NavItem title="Settings" active={false} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <FooterItem title="Help" />
        <FooterItem title="Contact Us" />
      </div>
    </nav>
  );
};

export default Navbar;
