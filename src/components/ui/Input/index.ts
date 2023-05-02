import styled from "styled-components";

export const Input = styled.input`
    font: inherit;
    width: 100%;
    min-width: 10rem;
    padding: 0.5rem;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.primaryText};
    outline: none;
    border: 1px solid ${props => props.theme.colors.stroke};
    border-radius: 0.5rem;
    background-color: transparent;
    ::placeholder {
        color: ${props => props.theme.colors.secondaryText}
    }


`