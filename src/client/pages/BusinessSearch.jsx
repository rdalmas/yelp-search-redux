import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Filters from "../components/Filters/Filters";
import SearchResults from "../components/SearchResults/SearchResults";
import { getBasicFilters, getBusiness, isLoading, getDefaultParams } from "../redux/selectors/businessSearch";
import { searchBusiness } from "../redux/actions/businessSearch";

const BusinessSearch = () => {
  const dispatch = useDispatch();
  const defaultParams = useSelector(getDefaultParams);
  const basicFilters = useSelector(getBasicFilters);
  const business = useSelector(getBusiness);
  const loading = useSelector(isLoading);
  const onChange = useCallback((param) => {
    dispatch(searchBusiness(param))
  }, [dispatch]);
  return (
    <>
      <h2>Business Search</h2>
      <Filters basicFilters={basicFilters} onChange={onChange} defaultParams={defaultParams} />
      <SearchResults results={business} isLoading={loading} />
    </>
  );
}

export default BusinessSearch;