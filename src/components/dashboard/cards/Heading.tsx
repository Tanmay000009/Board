const Heading = () => {
  return (
    <>
      <div className="hidden md:flex lg:hidden flex-col justify-between items-start">
        <h5 className="text-black font-mont font-bold text-lg">Top Products</h5>
        <h6 className="text-[#858585] font-mont font-normal text-sm">
          May-Jun 2004
        </h6>
      </div>
      <div className="flex md:hidden lg:flex flex-row justify-between items-center">
        <h5 className="text-black font-mont font-bold text-lg">Top Products</h5>
        <h6 className="text-[#858585] font-mont font-normal text-sm">
          May-Jun 2004
        </h6>
      </div>
    </>
  );
};

export default Heading;
