import { CheckboxInput } from '@/components/ui/Checkbox'
import React from 'react'
import styled from 'styled-components'



interface Props {
    settingName: string
    isChecked: boolean
    onClick: () => void
}

const SettingsViewItemContainer = styled.div`
    width: 100%;
    padding: 0.75rem;
    font-size: 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.stroke};
`

export default function SettingsViewItem(props: Props) {
  return (
   <SettingsViewItemContainer>
        <div>{props.settingName}</div>
        <CheckboxInput type='checkbox' checked={props.isChecked} onChange={props.onClick}/>
   </SettingsViewItemContainer> 
  )
}
