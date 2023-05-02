import styled from "styled-components";

interface Props {
    variant?: "primary" | "secondary";
}

export const Button = styled.button<Props>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font: inherit;
    font-size: 0.75rem;
    font-weight: 500;
    /* font-size: 0.875rem; */
    color: inherit;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    /* padding: 0.5rem; */
    /* padding: 0.5rem 0.75rem; */
    background-color: ${props => props.variant === "primary" ? props.theme.colors.primaryAccent : props.theme.colors.secondaryAccent};
    -webkit-app-region: no-drag;
    cursor: pointer;
    min-width: 3.125rem;
    :hover {
        filter: brightness(0.8);
    }

`

Button.defaultProps = {
    variant: "primary"
}