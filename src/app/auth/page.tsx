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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
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
