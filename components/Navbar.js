"use client"
import Image from "next/image"
import logo from '@/public/logo.svg'
import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from "react-date-range"




const Navbar = () => {
  const [search, setSearch] = useState('')
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  
  
  

  return (
    <nav className="sticky z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer ">
            <Image
            src={logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            />
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2
        md:shadow-sm">

          <input type="text" className="pl-5 bg-transparent outline-none
           flex-grow text-sm text-gray-600 placeholder-gray-400" placeholder="start your search" 
           value={search} onChange={(e)=> setSearch(e.target.value)} />

          <MagnifyingGlassIcon className="h-8 bg-red-400 rounded-full p-2 
          cursor-pointer hidden md:inline-flex md:mx-2"/>
          
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-400">
          <p className="hidden md:inline cursor-pointer">Airbnb your home</p>
          <GlobeAltIcon className="h-6 "/>
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full" >
            <Bars3Icon className="h-6 text-gray-400"/>
            <UserCircleIcon className="h-6"/>
          </div>
        </div>
        
        {search && 
        <div>
          <DateRangePicker 
          ranges={[date]}/>
        </div> }
      
    </nav>
  )
}

export default Navbar
