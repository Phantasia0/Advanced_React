import React from 'react';
import {SplitScreen} from './components/split-screen';


const LeftSideComp:React.FC<{title:string}> = ({title})=>{
  return (
      <h2 style={{backgroundColor:'crimson'}}>I am {title}</h2>
  )
}

const RightSideComp:React.FC<{title:string}> = ({title})=>{
  return (
      <h2 style={{backgroundColor:'burlywood'}}>I am {title}</h2>
  )
}


const App:React.FC = ()=>{
  return(
      <>
        <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp title={'left'}/>
            <RightSideComp title={'right'}/>
        </SplitScreen>
      </>
  )
}
export default App;
