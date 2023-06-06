import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment , incrementby } from "./counterSlice";

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (<>
    {count}
    <button onClick={()=>dispatch(increment()) }> Increment</button>
    <button onClick={()=>dispatch(incrementby(5)) }> Increment By Value</button>
    <button onClick={()=>dispatch(decrement())}> Decrement</button>
    </>  );
}

export default Counter;