"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BoardComponent = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      style={{
        clipPath: " polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
      }}
      className="basis-1/2 p-12 flex flex-col h-screen bg-gradient-to-br from-[#4285F4] from-10% to-[#286DE0] "
    >
      <div className="">
        <h1 className="text-white font-poppins text-2xl 2xl:text-4xl tracking-wide">
          {" "}
          LOGO{" "}
        </h1>
      </div>
      <div className=" flex flex-grow flex-row justify-center items-center w-full">
        <div className=" flex flex-row justify-start items-center w-3/4 font-mont font-bold text-white text-6xl 2xl:text-8xl">
          Board.
        </div>
      </div>
      <div className="flex flex-row gap-8 lg:gap-16 2xl:gap-24 justify-around lg:justify-start items-center sm:mr-8 lg:mx-12">
        <Image
          src="/icons/github.svg"
          alt="Github icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={width > 1536 ? 48 : width > 1024 ? 32 : 32}
          height={width > 1536 ? 48 : width > 1024 ? 32 : 32}
        />
        <Image
          src="/icons/twitter.svg"
          alt="Twitter icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={width > 1536 ? 48 : width > 1024 ? 32 : 32}
          height={width > 1536 ? 48 : width > 1024 ? 32 : 32}
        />
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={width > 1536 ? 48 : width > 1024 ? 32 : 32}
          height={width > 1536 ? 48 : width > 1024 ? 32 : 32}
        />
        <Image
          src="/icons/discord.svg"
          alt="Discord icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={width > 1536 ? 48 : width > 1024 ? 32 : 32}
          height={width > 1536 ? 48 : width > 1024 ? 32 : 32}
        />
      </div>
    </div>
  );
};

export default BoardComponent;
