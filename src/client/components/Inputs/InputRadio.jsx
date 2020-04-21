import React from "react";

const InputRadio = ({ onChange, options, name, defaultValue }) => (
  <div className="form-check">
    {options.map(option => (
      <div key={option}>
        <input className="form-check-input" defaultChecked={option === defaultValue} type="radio" name={name} id={option} value={option} onChange={(e) => onChange(e)} />
        <label className="form-check-label" htmlFor={option}>
          {option}
        </label>
      </div>
    ))}
  </div>
)

export default InputRadio;