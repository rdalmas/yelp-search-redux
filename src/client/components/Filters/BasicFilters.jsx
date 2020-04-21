import React from "react";

import types from "./filterTypes";
import InputRadio from "../Inputs/InputRadio";
import InputText from "../Inputs/InputText";

function RenderInput({ type, options, name, disabled, defaultValue, onChange }) {
  switch(type) {
    case types.radio:
      return (<InputRadio name={name} options={options} onChange={onChange} defaultValue={defaultValue} />)
    case types.text:
      return (<InputText name={name} disabled={disabled} onChange={onChange} defaultValue={defaultValue} />)
    default:
      return null
  }
}
const BasicFilters = ({ filters, onChange }) => (
  <>
    <h5>Basic Filters</h5>
    {filters.map(filter => (
      <RenderInput key={filter.name} onChange={onChange} {...filter}  />
    ))}
  </>
)

export default BasicFilters;