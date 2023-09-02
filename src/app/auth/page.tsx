/* eslint-disable @next/next/no-page-custom-font */
import Image from "next/image";
import LoginForm from "./loginForm";
import LoginComponent from "./loginComponent";
import BoardComponent from "./BoardComponent";
import BoardComponentMobile from "./BoardComponentMobile";
import LoginComponentMobile from "./LoginComponentMobile";
import FooterComponentMobile from "./FooterComponentMobile";

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
