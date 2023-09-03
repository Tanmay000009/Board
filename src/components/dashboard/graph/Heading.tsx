const GraphHeading = () => {
  return (
    <div className="flex flex-row justify-between items-end">
      <div className="flex flex-col gap-2">
        <h3 className="font-mont font-bold text-lg">Activities</h3>
        <h4 className="font-mont font-normal text-sm text-[#858585]">
          Feb 2009
        </h4>
      </div>
      <div className="flex flex-row gap-10 mr-8">
        <div className="flex flex-row gap-4 items-center">
          <div className="h-2 w-2 rounded-full bg-[#8884d8]"></div>
          <p className="text-xs">IBM</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="h-2 w-2 rounded-full bg-[#82ca9d]"></div>
          <p className="text-xs">MSFT</p>
        </div>
      </div>
    </div>
  );
};

export default GraphHeading;
