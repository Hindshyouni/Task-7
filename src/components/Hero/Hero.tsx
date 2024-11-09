import Image from 'next/image'
import React from 'react'
import hero from '@/assets/img/hero.png'
import icon1 from '@/assets/img/icon1.png'
import icon2 from '@/assets/img/icon2.png'
import calender from '@/assets/img/calrender.png'
import car from '@/assets/img/car.png'
import clock from '@/assets/img/clock.png'
import privatetours from '@/assets/img/privatetours.png'
import tour from '@/assets/img/tour.png'
import search from '@/assets/img/search.png'


export const Hero = () => {
  return (
<div className="hero-container ">
<Image 
  src={hero}
  alt="باكغراوند"
  layout="fill"
  objectFit="cover"
  quality={100}
  className='h-screen -z-10 '
/>

    <div>
        <h1 className='text-center text-7xl font-serif text-white pb-4 pt-32'>Enjoy in the best way!</h1>
        <p className='text-center text-2xl text-white pb-[60px]'>Enjoy our services for your trip anytime</p>

        <div className='max-w-[983px] h-[208px] bg-fim backdrop-blur-sm m-auto rounded-xl p-5' >
            <div className='flex'>
                <button className='flex items-center rounded-tl-xl bg-white p-4 '><Image className='mx-2.5' src={icon1} alt=" icon-social " width={24} height={24} /> <span className='text-myprimary'>Public Tours</span></button>
                <button className='flex items-center rounded-tr-xl bg-fim backdrop-blur-sm p-4'><Image className='mr-2.5' src={icon2} alt=" icon-social " width={24} height={24} /> <span className='text-white' >Private Tours</span></button>
            </div>

            <form className='flex max-w-[1200px]  bg-white p-4 rounded-tr-xl rounded-br-xl rounded-bl-xl'>
                
          


            <div className='flex items-start justify-start p-4'>
            <Image className='mr-2' src={privatetours} alt=" icon-social " width={24} height={24} />
            <div className='flex flex-col border-r '>
                <label className='text-myblackk' >Number of people</label>
                <select className='m-auto'>
                <option value="red">Choose number</option>
                <option value="green"> الأخضر</option>
                <option value="blue"> الأزرق</option>
                 </select>

            </div>
            </div>
            
            





            <div className='flex items-start justify-start p-4'>
            <Image className='mr-2' src={calender} alt=" icon-social " width={24} height={24} />
            <div className='flex flex-col border-r   '>
                <label  className='text-myblackk' >Date</label>
                <select className='m-auto'>
                <option value="red">Choose Date</option>
                <option value="green"> الأخضر</option>
                <option value="blue"> الأزرق</option>
                 </select>

            </div>
            </div>


            <div className='flex items-start justify-start p-4'>
            <Image className='mr-2' src={clock} alt=" icon-social " width={24} height={24} />
            <div className='flex flex-col border-r   '>
                <label  className='text-myblackk' >Time</label>
                <select className='m-auto'>
                <option value="red">Choose Time</option>
                <option value="green"> الأخضر</option>
                <option value="blue"> الأزرق</option>
                 </select>

            </div>
            </div>




            <div className='flex items-start justify-start p-4'>
            <Image className='mr-2' src={tour} alt=" icon-social " width={24} height={24} />
            <div className='flex flex-col border-r  '>
                <label className='text-myblackk' >Tour</label>
                <select className='m-auto'>
                <option value="red">Select Tour</option>
                <option value="green"> الأخضر</option>
                <option value="blue"> الأزرق</option>
                 </select>

            </div>
            </div>




            <div className='flex items-start justify-start p-4'>
            <Image className='mr-2' src={car} alt=" icon-social " width={24} height={24} />
            <div className='flex flex-col border-r  '>
                <label className='text-myblackk'>Transportation</label>
                <select className='m-auto'>
                <option value="red">Select Transportation</option>
                <option value="green"> الأخضر</option>
                <option value="blue"> الأزرق</option>
                 </select>

            </div>
            </div>




            <button className='bg-myprimary w-20 h-20 rounded-xl'> <Image className='m-auto' src={search} alt=" icon-social " width={32} height={32} /></button>
            </form>
                
       </div>

    </div>
</div>
  
  )
}







    


