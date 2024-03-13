import React,{useState,useEffect} from 'react';

function Use() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
      console.log("I've Been Clicked")
    },[count])
    return (
      <>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <h1>I am clicked {count} Times.</h1>
      </>
    )
  }
  
  export default Use;