import Image from 'next/image'
import React from 'react'
import vector1 from '@/assets/img/Vector.png'
import vector2 from '@/assets/img/Vector (1).png'
import Card from '../Card/Card'
import img1 from '@/assets/img/Rectangle 16 (2).png'
import img2 from '@/assets/img/Rectangle 16.png'
import img3 from '@/assets/img/Rectangle 16 (3).png'
import img4 from '@/assets/img/Rectangle 16 (1).png'
import icon1 from '@/assets/img/system-uicons_calendar-month.png'
import icon2 from '@/assets/img/icon_private tours.png'

const CardInfo = [
  {
    img: img1,
    title: "Lucca Bike Tour",
    priceFrom: "from",
    price: "34 €",
    icon1: icon1,
    day: "EVERY DAY",
    icon2: icon2,
    date: "3-10 PP",
    paragraph: "A tour of the city and its surroundings led by a professional guide ..."
  },
  {
    img: img2,
    title: "Wine tasting In Tuscany",
    priceFrom: "from",
    price: "34 €",
    icon1: icon1,
    day: "MONDAY",
    icon2: icon2,
    date: "3-10 PP",
    paragraph: "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
  },
  {
    img: img3,
    title: "Cinque Terre Tour",
    priceFrom: "from",
    price: "34 €",
    icon1: icon1,
    day: "TO BE DECIDED",
    icon2: icon2,
    date: "3-10 PP",
    paragraph: "Visiting the 5 Terre is a must, and you can never go there enough ..."
  },
  {
    img: img4,
    title: "Siena and Surroundings",
    priceFrom: "from",
    price: "34 €",
    icon1: icon1,
    day: "TO BE DECIDED",
    icon2: icon2,
    date: "3-10 PP",
    paragraph: "Visit the beautiful Siena and the cities that surround it to experience ..."
  }
]

const Cards = () => {
  return (
    <div className=' px-250px mt-[123px] '>
        <div className='flex justify-between items-center mb-16'>
      <h3 className='text-[32px] text-myblackk'>Explore Our Popular Destinations</h3>
      <div>
        <button className='w-[50px] h-[50px] bg-[#EFEFEF] rounded-full mr-5'><Image className='m-auto' src={vector1} alt='arrow' /></button>
        <button className='w-[50px] h-[50px] bg-myprimary rounded-full'><Image className='m-auto' src={vector2} alt='arrow' /></button>
        </div>
      </div>
      

    <div className='flex gap-x-4 '>
    {CardInfo.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          priceFrom={element.priceFrom}
          price={element.price}
          day={element.day}
          date={element.date}
          paragraph={element.paragraph}
          img={element.img}
          icon2={element.icon2}
          icon1={element.icon1}
        />
      ))}
    </div>
    </div>
  );
};

export default Cards;
