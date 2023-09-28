'use client'
import { rocketContext } from '@/context/SkyContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

const Rocket = ({data}) => {

      const{name,flickr_images,description}=data;
      const[status,setStatus]=useState(true);
      const{rocketDelete,handlerocketR} =useContext(rocketContext);
       
      
    
        return (
            <section className='flex flex-col sm:flex-row sm:gap-10 mb-10'>
                <div className='mb-5 sm:mb-0'>
                <Image
                src={flickr_images[1]}
                width={500}
                height={500}  
                alt={name}
                priority
                
                className='w-full sm:w-[240px] object-fill sm:h-[160px] '/> 
                  </div>
                <div>
                <h1 className='text-2xl font-bold mb-5'>{name}</h1>
                <p className='mb-5'>{description}</p>
                

                {status ? (<button onClick={()=>{
                setStatus(false);
                handlerocketR(data);
                }} className='bg-blue-600 border-2 border-blue-600 rounded-md text-white px-5 py-3'>Reserve Dragon</button>)
                :(<button onClick={()=>{
                  setStatus(true);
                  rocketDelete(data.id);}} 
                className='text-red-600 border-2 border-red-600 rounded-md px-5 py-3 bg-white'>Cancel Reservation</button>)}
             
    
                  </div>
                
            </section>
    );
};

export default Rocket;