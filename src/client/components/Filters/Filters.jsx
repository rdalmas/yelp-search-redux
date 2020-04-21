import React, { useState, useEffect } from "react";

import BasicFilters from "./BasicFilters";

const Filters = ({ basicFilters, onSubmit, defaultParams = {} }) => {
  const [params, setParams] = useState({...defaultParams});
  const onChangeFilter = (e) => {
    const { name, value } = e.target;
    setParams(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  const onSubmitHandler = (e) => {
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