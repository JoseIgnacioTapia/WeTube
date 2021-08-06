import { useState } from 'react';

const useDropdown = (label, initialState, options) => {
  const [optionSelected, setOptionSelected] = useState(initialState);
  const id = `use-dropwdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={optionSelected}
        onChange={e => e.target.value}
        onBlur={e => e.target.value}
      >
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return [optionSelected, setOptionSelected, Dropdown];
};

export default useDropdown;
