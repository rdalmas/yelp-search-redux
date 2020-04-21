import React, { useState, useEffect } from "react";

import BasicFilters from "./BasicFilters";

const Filters = ({ basicFilters, onChange, defaultParams = {} }) => {
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
  useEffect(() => {
    onChange(params)
  }, [params])

  return (
    <>
      {basicFilters && (<BasicFilters filters={basicFilters} onChange={(e) => onChangeFilter(e)} />)}
    </>
  )
}

export default Filters;