import React from "react";

const Search = ({ basicFilters, advancedFilters }) => (
  <>
    {basicFilters && (<BasicFilters basicFilters={basicFilters} />)}
    {advancedFilters && (<AdvancedFilters advancedFilters={advancedFilters} />)}
  </>
);

export default Search;