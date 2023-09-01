const BoardComponentMobile = () => {
  return (
    <div
      style={{
        clipPath: " polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
      }}
      className="basis-[8%] p-8 flex flex-col h-screen bg-gradient-to-r from-[#4285F4] from-20% to-[#286DE0] "
    >
      <header>
        <h1 className="text-white font-poppins text-2xl 2xl:text-4xl tracking-wide">
          LOGO
        </h1>
      </header>
    </div>
  );
};

export default BoardComponentMobile;
