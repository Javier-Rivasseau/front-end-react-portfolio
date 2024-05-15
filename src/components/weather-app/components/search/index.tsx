import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (newValue: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  setSearch,
  handleSearch,
}) => {
  
  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="w-full md:w-3/4 lg:w-1/2 flex">
        <input
          type="text"
          className="flex-grow h-12 border border-black border-solid rounded-l-md px-4 py-2  outline-none bg-white text-gray-600"
          placeholder="Enter city name"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="h-12 px-4 border-none rounded-r-md bg-indigo-600 text-white font-semibold text-sm md:text-base outline-none"
          onClick={handleSearch}
        >
          Search Weather
        </button>
      </div>
    </div>
  );
};

export default SearchBar;