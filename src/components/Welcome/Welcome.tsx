import Image from 'next/image'
import React from 'react'
import girl from '@/assets/img/Group 2.png'

const Welcome = () => {
  return (
    <div className='flex  items-center px-250px text-myblackk gap-x-52  '>
        <div>
    <Image src={girl} alt='girl' className=' max-h-[650px] max-w-[630px] '/>
    </div>
    <div className=' flex flex-col justify-center  max-w-[500px]'>
        <h1 className=' text-base'>WELCOME TO OUR SITE!</h1>
        <h1 className=' text-[30] font-extrabold'>We are the best company
        for your visit</h1>
        <p className='text-lg font-normal '>After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>

    </div>
    


    </div>
  )
}

export default Welcome