import styled from "styled-components";

export const Button = styled.button`
    font: inherit;
    font-size: 0.75rem;
    /* font-size: 0.875rem; */
    color: inherit;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.colors.primaryAccent};
    -webkit-app-region: no-drag;
    cursor: pointer;
    :hover {
        filter: brightness(0.8);
    }

`