import styled from "styled-components";

export const CheckboxInput = styled.input`
  appearance: none;
  /* display: inline-block; */
  // think about this
  height: 1rem;
  /* height: 1.5rem;
  width: 1.5rem; */
  width: 1rem;
  border: 1px solid ${(props) => props.theme.colors.secondaryText};
  border-radius: 0.25rem;
  /* border-radius: 0.5rem; */
  cursor: pointer;
  background-color: transparent;

  &:checked {
    border: none;
    background-color: ${(props) => props.theme.colors.primaryAccent};
    &::after {
    // unicode for checkmark
      content: "\\2713";
      /* content: "✓"; */
      /* content: '✓'; */
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.primaryText};
      height: 100%;
      width: 100%;
    }
  }
`;