import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBasicFilters, getBusiness, getDefaultParams } from "../redux/selectors/businessSearch";
import { searchBusiness } from "../redux/actions/businessSearch";
import Pagination from "../components/Search/Pagination";
import Search from "../components/Search/Search";

const BusinessSearch = () => {
  const dispatch = useDispatch();
  const defaultParams = useSelector(getDefaultParams);
  const basicFilters = useSelector(getBasicFilters);
  const business = useSelector(getBusiness);
  const onSubmit = useCallback((param) => {
    dispatch(searchBusiness(param))
  }, [dispatch]);
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-12">
          <h4>Business Search</h4>
        </div>
      </div>
      <div className="row mt-2">
        <Search 
          basicFilters={basicFilters} 
          onSubmit={onSubmit} 
          defaultParams={defaultParams}
          results={business}
        />
      </div>
    </div>
  );
}

export default BusinessSearch;