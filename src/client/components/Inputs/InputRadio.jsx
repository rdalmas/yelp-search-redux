import React from "react";

const InputRadio = ({ onChange, options, name, defaultValue }) => (
  <>
    <label htmlFor={name}>{name}:</label>
    {options.map(option => (
      <div className="form-check" key={option}>
        <input className="form-check-input" defaultChecked={option === defaultValue} type="radio" name={name} id={option} value={option} onChange={(e) => onChange(e)} />
        <label className="form-check-label" htmlFor={option}>
          {option}
        </label>
      </div>
    ))}
  </>
)

export default InputRadio;