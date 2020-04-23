import React from "react";

import BasicFilters from "./BasicFilters";

const Filters = ({ basicFilters, onChange, onSubmit }) => {
  function onChangeFilter(e) {
    const { name, value } = e.target;
    onChange(name, value);
  }

  return (
    <>
      {basicFilters && (
        <BasicFilters 
          filters={basicFilters} 
          onChange={(e) => onChangeFilter(e)} 
          onSubmit={() => onSubmit()} 
        />
      )}
    </>
  )
}

export default Filters;