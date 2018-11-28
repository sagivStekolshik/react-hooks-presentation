import React,{useState} from 'react';


const Counter = () => {
    const [count,setCounter] = useState(0)
  
    return (
    <React.Fragment>
        <h1>you clicked {count} times</h1>
        <button onClick={() => setCounter(count + 1)}>click me</button>
    </React.Fragment>
  );
}

export default Counter;
  