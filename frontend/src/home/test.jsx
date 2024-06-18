import React, { useState,useEffect } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  useEffect(()=> {setCount(count+1);},[])
  function add() {
    setCount(count+1);
  }
  function sub() {
    setCount(count-1);
  }
  console.log(count);
  return (
    <div>
      {count}
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  );
}
