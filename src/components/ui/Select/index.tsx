import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  font: inherit;
  width: 100%;
  min-width: 10rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.primaryText};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.stroke};
  border-radius: 0.5rem;
  background-color: transparent;
`;

const SelectElement = styled.select`
    outline: none;
    font: inherit;
    width: 100%;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secondaryText};
    border: none;
`

interface Props {
  value: string
  onChange: (value: string) => void
  options: string[];
}
export default function Select({ options, value, onChange }: Props) {
  return (
    <SelectContainer>
      <SelectElement value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((val) => (
          <option value={val}>{val}</option>
        ))}
      </SelectElement>
    </SelectContainer>
  );
}
