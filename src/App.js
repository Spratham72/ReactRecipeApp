import logo from './logo.svg';
import './App.css';
import {Div} from './styled/grid';
import {Input} from './components/input'
import {Cards} from './components/display';
import { Detail } from './components/details';
import {useState } from "react";
function App() {
  const [state, setstate]=useState(false);
  const [item, itemState]=useState([]);
  const data=(d)=>{
    setstate(true);
    itemState(d[0]);
    console.log(d)
    console.log(item)
    
}
  return (
    <>
    <Div>
    <div className="App">
     <Input/>
     
    </div>
    <Cards elData={data}/>
    </Div>
    {state? <Detail data={item}/>:<div>Click on the Recipe to see Details</div>};  
    </>
  );
}

export default App;
