import styled from "styled-components";

export const ViewHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    /* font-size: 0.875rem; */
    font-size: 0.75rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.stroke};
    user-select: none;
    text-transform: uppercase;
    font-weight: bold;
`

export const ViewHeaderButton = styled.div`
    color: ${props => props.theme.colors.secondaryText};
    vertical-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0.25rem; */
    cursor: pointer;
    /* border-radius: 0.5rem; */
    :hover {
        /* background-color: ${props => props.theme.colors.secondaryAccent}; */
        color: ${props => props.theme.colors.secondaryAccent};
    }
`
