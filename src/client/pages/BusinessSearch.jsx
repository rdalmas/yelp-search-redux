import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Filters from "../components/Filters/Filters";
import SearchResults from "../components/SearchResults/SearchResults";
import { getBasicFilters, getBusiness, isLoading, getDefaultParams, getPaginationData } from "../redux/selectors/businessSearch";
import { searchBusiness } from "../redux/actions/businessSearch";
import Pagination from "../components/Pagination/Pagination";

const BusinessSearch = () => {
  const dispatch = useDispatch();
  const defaultParams = useSelector(getDefaultParams);
  const basicFilters = useSelector(getBasicFilters);
  const business = useSelector(getBusiness);
  const loading = useSelector(isLoading);
  const { total, limit } = useSelector(getPaginationData);
  const onSubmit = useCallback((param) => {
    dispatch(searchBusiness(param))
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <h2>Business Search</h2>
          <Filters basicFilters={basicFilters} onSubmit={onSubmit} defaultParams={defaultParams} />
        </div>
        <div className="col-md-9 align-self-center">
          <SearchResults results={business} isLoading={loading} />
        </div>
      </div>
      <Pagination onChangePage={onSubmit} total={total} limit={limit} defaultParams={defaultParams} />
    </div>
  );
}

export default BusinessSearch;