const LabelItem = ({ label, share }: { label: string; share: number }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2  items-center">
        <div className="bg-[#0088FE] h-2 w-2 rounded-full"></div>
        <p className="text-sm font-mont font-bold">{label}</p>
      </div>
      <div className="flex flex-row gap-2  items-center">
        <div className="bg-[#0088FE] h-2 w-2 rounded-full -z-10"></div>
        <p className="text-[#858585] text-xs">{share} %</p>
      </div>
    </div>
  );
};

export default LabelItem;
