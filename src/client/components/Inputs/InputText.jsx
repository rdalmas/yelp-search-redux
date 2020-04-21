import React from "react";

const InputText = ({ onChange, defaultValue, disabled, name, helpText }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="text" id={name} aria-describedby="inputHelp" className="form-control" defaultValue={defaultValue} onChange={(e) => onChange(e)} disabled={disabled} name={name} />
      <small id="inputHelp" className="form-text text-muted">{helpText}</small>
    </>
  )
}

export default InputText;