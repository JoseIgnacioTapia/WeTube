import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 1rem;

  > select {
    margin-left: 1rem;
    background-color: #e7e1ce;
    border: solid 1px #333;
    border-radius: 5px;
  }
`;

export const useDropdown = (label, initialState, options) => {
  const [optionSelected, setOptionSelected] = useState(initialState);
  const id = `use-dropwdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <Label htmlFor={id}>
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
    </Label>
  );

  return [optionSelected, Dropdown, setOptionSelected];
};
