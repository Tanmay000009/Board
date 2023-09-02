import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="pt-2 relative mx-auto text-[#B0B0B0] flex flex-row justify-center items-center">
      <input
        className=" bg-white h-9 px-4 pr-12 rounded-xl text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-8 cursor-pointer hover:scale-110 transition duration-150  hover:opacity-80 active:scale-90 active:opacity-100"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
