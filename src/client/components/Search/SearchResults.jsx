import React from "react";
import { useSelector } from "react-redux";

import NoResults from "./NoResults";
import ShowResults from "./ShowResults";
import Spinner from "../Spinner/Spinner";
import { isLoading } from "../../redux/selectors/appState";

const SearchResults = ({ results }) => {
  const loading = useSelector(isLoading);
  return (
    <div className="row">
      <div className="col-md-12">
        {loading && (<Spinner />)}
        {!loading && results && results.length > 0 && (<ShowResults results={results} />)}
        {!loading && results && results.length === 0 && (<NoResults />)}
      </div>
    </div>
  );
}

export default SearchResults;