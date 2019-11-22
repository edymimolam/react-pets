import React, { useState } from "react";

export default function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={label.toLowerCase()}>
      {label}
      <select
        value={state}
        id={id}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option></option>
        {options.map(i => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
}
