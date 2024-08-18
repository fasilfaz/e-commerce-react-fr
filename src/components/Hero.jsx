import React from 'react';
import WomenImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='h-[800px] bg-hero bg-no-repeat bg-cover py-24'>
    <div className="container mx-auto flex justify-around">
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trending
        </div>
        <h1 className='text-[70px] leading=[1.1] font-light mb-4'>
          MOTHER'S DAY <br /> <span className='font-semibold'>SPECIAL</span>
        </h1>
        <Link className='uppercase self-start font-semibold border-b-2 border-primary' to={'/'}>Discover more</Link>
      </div>
      <div className='hidden lg:block'>
        <img src={WomenImg} alt="" />
      </div>
    </div>
  </section>;
};

export default Hero;
