import React, { useState } from "react";

const InputText = ({ onChange, defaultValue, disabled, name }) => {
  return (
    <input type="text" defaultValue={defaultValue} onChange={(e) => onChange(e)} disabled={disabled} name={name} />
  )
}

export default InputText;