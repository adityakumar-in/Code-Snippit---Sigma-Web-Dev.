// You can access state from it's component only, to give access to other components you can use props but in React Redux you can access state from any component.

// So you can create a Redux store and access it from any component.

import { useState } from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <span>{count}</span>
      <button onClick={()=>{dispatch(increment())}}>+</button>
    </>
  );
}

export default App;
