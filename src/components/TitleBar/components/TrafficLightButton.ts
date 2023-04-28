import styled from "styled-components";

interface Props {
    color: string
}
export const TrafficLightButton = styled.div<Props>`
    background-color: ${props => props.color};
    width: 0.75rem;
    height: 0.75rem;
    display: inline-block;
    border-radius: 50%;
    -webkit-app-region: no-drag;
    cursor: pointer;
    :hover {
        filter: brightness(0.8);
    }
`

