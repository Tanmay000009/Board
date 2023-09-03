/* eslint-disable @next/next/no-page-custom-font */
import Image from "next/image";
import LoginForm from "../components/auth/loginForm";
import LoginComponent from "../components/auth/loginComponent";
import BoardComponent from "../components/auth/BoardComponent";
import BoardComponentMobile from "../components/auth/mobile/BoardComponentMobile";
import LoginComponentMobile from "../components/auth/mobile/LoginComponentMobile";
import FooterComponentMobile from "../components/auth/mobile/FooterComponentMobile";

const Auth = () => {
  return (
    <>
      <main className="hidden sm:flex flex-row h-screen w-screen bg-[#F8FAFF] ">
        <BoardComponent />
        <LoginComponent />
      </main>
      <main className="flex sm:hidden flex-col h-screen w-screen bg-[#F8FAFF] ">
        <BoardComponentMobile />
        <LoginComponentMobile />
        <FooterComponentMobile />
      </main>
    </>
  );
};

export default Auth;
