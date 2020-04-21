import React from "react";

import NoResults from "./NoResults";
import ShowResults from "./ShowResults";
import Spinner from "../Spinner/Spinner";

const SearchResults = ({ results, isLoading }) => (
  <div className="row">
    <div className="col-md-12">
      {isLoading && (<Spinner />)}
      {!isLoading && results && results.length > 0 && (<ShowResults results={results} />)}
      {!isLoading && results && results.length === 0 && (<NoResults />)}
    </div>
  </div>
);

export default SearchResults;