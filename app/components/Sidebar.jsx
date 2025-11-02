"use client"
import React from 'react'
import Link from 'next/link'

const sidebar = () => {
  return (
    <div className='flex fixed top-0 bg-black text-white sidebar border border-[#000000b0] w-[15%] flex-col h-screen  ' >
    <Link   href="/" >
      <h1 className='text-2xl m-2 mt-6 ' > Admin Dashboard  </h1>   
  </Link> 
        <ul className='flex flex-col gap-5 ml-4 mt-10 ' >
       <Link href="/products" > <li>Dashboard</li> </Link>
        <li>Products</li>    
        <li>Orders</li>    
        <li>Analytics</li>
        <li>Settings</li>
        </ul> 
        
     </div>
  )
}

export default sidebar