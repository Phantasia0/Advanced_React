import React from 'react';
import {styled} from 'styled-components';

const Container = styled.div`
  display:flex;
`

const Panel = styled.div<{flex:number}>`
  flex:${p => p.flex};
`

interface SplitScreenProps {
    children: React.ReactNode[],
    leftWidth: number,
    rightWidth:number
}
export const SplitScreen:React.FC<SplitScreenProps> = ({ children, leftWidth =1, rightWidth =1 })=>{
    const [left, right] = children;

    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>
            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}