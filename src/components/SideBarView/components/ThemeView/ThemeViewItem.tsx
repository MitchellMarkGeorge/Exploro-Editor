import React from 'react'
import styled from 'styled-components'

const ThemeViewItemContainer = styled.div`
    width: 100%;
    padding: 0.75rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.stroke};
`

const ColorCircle = styled.div<{ color: string }>`
    width: 1rem;
    /* width: 1.5rem; */
    height: 1rem;
    /* height: 1.5rem; */
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1.5px solid ${props => props.theme.colors.stroke};

`


interface Props {
    themeItem: string
    color: string
}

export default function ThemeViewItem(props: Props) {
  return (
    <ThemeViewItemContainer>
        <div>{props.themeItem}</div>
        <ColorCircle color={props.color}/>
    </ThemeViewItemContainer>
  )
}
