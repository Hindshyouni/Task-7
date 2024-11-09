import Image from 'next/image'
import React from 'react'
import logo from '@/assets/img/logo (1).png'
import Link from 'next/link'

const NavBar = () => {
  return (
   <nav className='  flex justify-between items-center bg-fim backdrop-blur-sm px-250px py-5 '>
    <div>
    <Image src={logo} alt="logonav" width={133} height={130}/>
    </div>


    <ul className='flex items-center text-white'>
        <li className='pl-10  hover:underline hover:text-orange-500 '  ><Link href={"/"}>Home</Link></li>
        <li className='pl-10 hover:underline hover:text-orange-500' ><Link href={"/About Us"}>About Us</Link></li>
        <li className='pl-10 hover:underline hover:text-orange-500'><Link href={"/Tour Packages"}>Tour Packages</Link></li>
        <li className='pl-10 hover:underline hover:text-orange-500'><Link href={"/Contact Us"}>Contact Us</Link></li>
    </ul>
    


    <ul className='flex items-center text-white'>
        <li className='pl-2.5'><Link href={"/"}>Eng</Link></li>
        <li className='pl-2.5'><Link href={"/"}>Login</Link></li>
        <li className='pl-2.5'><button className='bg-myprimary fo text-sm px-6 py-2.5 rounded-[50px] text-white'>Sign Up</button></li>
        
    </ul>
   

   </nav>
  )
}

export default NavBar