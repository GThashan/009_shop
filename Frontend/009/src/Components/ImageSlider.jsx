import React from 'react';
import Burgur from '../../src/assets/Burgur.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageSlider() {
  return (
    <div className='relative  mx-auto h-[80vh]  flex flex-col md:flex-row'>
     
     <div className='absolute inset-0 flex flex-col items-start justify-center gap-5 p-8  md:relative md:w-1/2 md:inset-auto  font-bold lg:text-black   '>

        <h1 className='font-bold text-[55px] lg:text-[50px] uppercase '>
          Good <span className='text-red-600'>Food</span> For A Healthy Life
        </h1>
        <p className='font-medium text-gray-800 italic lg:not-italic'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut alias blanditiis placeat reiciendis qui dicta praesentium architecto consectetur est eos.
        </p>
        <button className='py-3 px-3 bg-black text-white rounded-full flex items-center'>
          Order Now 
          <FontAwesomeIcon icon={faArrowRight} className='ml-2 animate-bounce' />
        </button>
      </div>
      <div className='flex flex-1 items-center justify-center md:relative md:w-1/2'>
        <img 
          src={Burgur} 
          alt="meal" 
          className='w-full h-full object-cover' 
        />
      </div>
    </div>
  );
}
