import styled from "styled-components";

interface Props {
    spacing?: string
}

export const Center = styled.div<Props>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.spacing && `gap: ${props.spacing};`};

`