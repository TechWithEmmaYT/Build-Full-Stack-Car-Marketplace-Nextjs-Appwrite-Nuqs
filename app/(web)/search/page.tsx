import React from "react";
import SearchContent from "./_components/search-content";

const SearchPage = () => {
  return (
    <main
      className="container mx-auto px-4
     pt-3 pb-8
    "
    >
      <div className="max-w-7xl mx-auto">
        <SearchContent />
      </div>
    </main>
  );
};

export default SearchPage;
