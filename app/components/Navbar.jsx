"use client"
import React from 'react'
import { useState} from 'react'
const Navbar = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div >
      <div className="navbar border flex items-center justify-between w-[95%]">

      <h1 className=' mt-5 m-3 popin font-bold  text-center text-3xl' >Ecommerce Dashboard     </h1>
       <div className="li ">
        <button className='border flex gap-4 rounded-full py-2 px-6' > 
          <span  className='cursor-pointer' >On </span>
          <span className='cursor-pointer' >Off  </span>


          
        </button>
        
       </div>
      </div>
    </div>
  )
}

export default Navbar 
