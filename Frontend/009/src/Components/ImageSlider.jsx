import React from 'react'
import Burgur from '../../src/assets/Burgur.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageSlider() {
  return (
    <div className='grid grid-cols-2 px-8 mx-aut0 h-[80vh] gap-10 bg-[#FFFAFA]'>
        <div className='flex flex-col items-start justify-center gap-5'>
            <h1 className='font-bold text-[50px]'>Good <span className='text-red-600'> Food </span>For A Healthy  Life</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut alias blanditiis placeat reiciendis qui dicta praesentium architecto consectetur est eos.</p>
           <button className='py-3 px-3 bg-black text-white rounded-full'>Order Now 
           
           <FontAwesomeIcon icon={faArrowRight} className='ml-2 animate-bounce' /></button>

        </div>
        <div className='flex items-center'>
           <img src={Burgur} alt="meal"/>
        </div>
      
    </div>
  )
}
