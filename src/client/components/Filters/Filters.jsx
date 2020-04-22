import React from "react";

import BasicFilters from "./BasicFilters";
import useParams from "../../hooks/useParams";

const Filters = ({ basicFilters, onSubmit, defaultParams = {} }) => {
  const { params, updateParams } = useParams(defaultParams);
  
  function onChangeFilter(e) {
    const { name, value } = e.target;
    updateParams(name, value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    onSubmit(params);
  }

  return (
    <>
      {basicFilters && (
        <BasicFilters 
          filters={basicFilters} 
          onChange={(e) => onChangeFilter(e)} 
          onSubmit={(e) => onSubmitHandler(e)} />)}
    </>
  )
}

export default Filters;