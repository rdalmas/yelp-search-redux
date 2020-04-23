import React from "react"; 

import Filters from "./Filters";
import SearchResults from "./SearchResults";
import Pagination from "./Pagination";
import useParams from "../../hooks/useParams";

const Search = ({ basicFilters, onSubmit, results, defaultParams = {} }) => {
  const { params, updateParams } = useParams(defaultParams);

  function onSubmitHandler(param, value) {
    if (param) {
      let newParams = {
        ...params,
        [param]: value
      }
      onSubmit(newParams)
    } else {
      onSubmit(params);
    }
  }
  return (
    <div className="col-md-12">
      <div className="row">
        <aside className="col-md-3">
          <Filters 
            basicFilters={basicFilters} 
            onSubmit={onSubmitHandler} 
            onChange={updateParams}
          />
        </aside>
        <section className="col-md-9 align-self-center">
          <SearchResults results={results} />
        </section>
      </div>
      <div className="row justify-content-center">
        <Pagination
          onSubmit={onSubmitHandler}
          onChangePage={updateParams}
          currentOffset={params.offset}
        />
      </div>
    </div>
  );
}

export default Search;