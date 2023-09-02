const FooterItem = ({ title }: { title: string }) => {
  return (
    <h2 className="text-white font-mont font-normal text-sm cursor-pointer">
      {title}
    </h2>
  );
};

export default FooterItem;
