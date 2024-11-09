import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IconType {
  src?: string | StaticImageData;
  alt?: string;
}

interface CardProps {
  img: IconType;
  title: string;
  priceFrom: string;
  price: string;
  icon1: IconType;
  day: string;
  icon2: IconType;
  date: string;
  paragraph: string;
}

const Card = ({
  title,
  priceFrom,
  price,
  day,
  date,
  paragraph,
  img,
  icon1,
  icon2,
}: CardProps) => {
  const renderIcon = (iconProps: IconType) => (
    <>
      {React.isValidElement(iconProps.src) ? iconProps.src : (
        <Image
          className="rounded-full w-6 h-6"
          src={iconProps.src as string}
          alt={iconProps.alt || ''}
          width={50}
          height={50}
        />
      )}
    </>
  );

  return (
    <div className="">
    
      {img.src ? (
        <Image
          src={img.src}
          alt={title}
          
          width={330}
          height={404}
        />
      ) : null}

      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <span>{priceFrom}</span>
        <span className="text-primary ml-2">{price}</span>
        <div className="flex items-center mt-4">
          {renderIcon(icon1)}
          <span>{day}</span>
        </div>
        <div className="mt-4 flex justify-between">
          {renderIcon(icon2)}
          <span>{date}</span>
        </div>
        <p className="mt-4 text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
