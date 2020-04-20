import React from "react";

import NoResults from "./NoResults";
import ShowResults from "./ShowResults";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results && results.length > 0 && (<ShowResults />)}
      {results && results.length === 0 && (<NoResults />)}
    </div>
  );
}

export default SearchResults;