import Image from "next/image";

const FooterComponentMobile = () => {
  return (
    <div
      style={{
        clipPath: " polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
      }}
      className="basis-[8%] p-8 flex flex-col h-screen bg-gradient-to-l from-[#4285F4] from-20% to-[#286DE0] "
    >
      <footer className="flex flex-row gap-8 lg:gap-16 2xl:gap-24 justify-around lg:justify-start items-center sm:mr-8 lg:mx-12">
        <Image
          src="/icons/github.svg"
          alt="Github icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={32}
          height={32}
        />
        <Image
          src="/icons/twitter.svg"
          alt="Twitter icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={32}
          height={32}
        />
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={32}
          height={32}
        />
        <Image
          src="/icons/discord.svg"
          alt="Discord icon"
          className="hover:scale-110 transition duration-150 cursor-pointer hover:opacity-80 active:scale-90 active:opacity-100"
          width={32}
          height={32}
        />
      </footer>
    </div>
  );
};

export default FooterComponentMobile;
