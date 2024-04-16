import React from "react";

const SearchBar = () => {
  return (
    <input
      type="search"
      prefix="search"
      className="px-4 w-3/5 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
      placeholder="Search for a dish or a restaurant"
    />
  );
};

export default SearchBar;
