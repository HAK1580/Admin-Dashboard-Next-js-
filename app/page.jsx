"use client";
import Navbar from "./components/Navbar";
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,reset } from "./redux/cart/CartSlice";
export default function Home() {
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="">
      Welcome to Admin Dashboard 
      <h1 className="text-4xl"> this is the value of count : {count}</h1>
      <button onClick={()=>dispatch(increment())} className="bg-blue-500  p-2 rounded-full cursor-pointer text-white" > Increase  </button>
      <button onClick={()=>dispatch(decrement())} className="bg-blue-500  p-2 rounded-full cursor-pointer ml-10 text-white" > Deccrease  </button>
      <button onClick={()=>dispatch(reset())} className="bg-red-500  p-2 px-8 rounded-full cursor-pointer ml-10 text-white" > Reset  </button>
      
      
    
  
      
      
    </div>
  );
}
