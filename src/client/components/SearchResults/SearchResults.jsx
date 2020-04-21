import React from "react";

import NoResults from "./NoResults";
import ShowResults from "./ShowResults";

const SearchResults = ({ results, loading }) => {
  return (
    <div>
      {/* TODO: implement loading component */}
      {loading && (<div>Loading...</div>)}
      {!loading && results && results.length > 0 && (<ShowResults results={results} />)}
      {!loading && results && results.length === 0 && (<NoResults />)}
    </div>
  );
}

export default SearchResults;