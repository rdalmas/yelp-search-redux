import React from "react";

import types from "./filterTypes";
import InputRadio from "../Inputs/InputRadio";
import InputText from "../Inputs/InputText";

function RenderInput({ type, options, name, disabled, defaultValue, onChange, helpText }) {
  switch(type) {
    case types.radio:
      return (
        <div className="mt-3">
          <InputRadio name={name} options={options} onChange={onChange} defaultValue={defaultValue} />
        </div>
      );
    case types.text:
      return (
        <div className="mt-3">
          <InputText name={name} disabled={disabled} onChange={onChange} defaultValue={defaultValue} helpText={helpText} />
        </div>
      );
    default:
      return null
  }
}
const BasicFilters = ({ filters, onChange, onSubmit }) => (
  <>
    <h5>Basic Filters</h5>
    {filters && filters.map(filter => (
      <RenderInput key={filter.name} onChange={onChange} {...filter}  />
    ))}
    <button type="submit" className="btn btn-primary mt-3 mb-3" onClick={onSubmit}>Filter</button>
  </>
)

export default BasicFilters;