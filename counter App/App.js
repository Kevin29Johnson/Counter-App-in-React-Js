
import './App.css';
import React,{useState} from 'react';


function App() {
  const btnstyle={ margin:'20px',fontSize:'1rem'}
  const style2={fontSize:'2rem' }
  const [count,setCount]=useState(0);
  function handleIncrease(){
    setCount(count+1)
  }
  function handleDecrease(){
    setCount(count-1)
  }
  function handleReset(){
    setCount(0)
  }
  return (
    <div className="App">
       <h1 style={style2}>{count}</h1>
       <button style={btnstyle} onClick={handleIncrease}>+</button>
       <button style={btnstyle} onClick={handleReset}>Reset</button>
       <button style={btnstyle} onClick={handleDecrease}>-</button>
    </div>
  );
}

export default App;
