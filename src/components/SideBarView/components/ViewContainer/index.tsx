import styled from "styled-components";

export const ViewContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    // for now
    border-right: 1px solid ${(props) => props.theme.colors.stroke};
`