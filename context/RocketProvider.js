'use client'
import React, { useState } from 'react';
import { rocketContext } from './SkyContext';

const RocketProvider = ({children}) => {
    const[rocketReserved,setrocketReserved]=useState([])


          const handlerocketR=(rocket)=>{
                if(!rocketReserved.includes(rocket)){
                  setrocketReserved([...rocketReserved,rocket]);
                 
                }
                else{
                  alert('rocket has already reserved');
                }

  
  }

  const rocketDelete =(id)=>{
    // alert('rocket deleted')
    
    confirm('Are you sure you want to delete');
   
    const newData=rocketReserved.filter((rocket)=> rocket.id!== id)
    return setrocketReserved([...newData]);
  }

    return (
        <>
           <rocketContext.Provider value={{rocketDelete,handlerocketR,rocketReserved}}>
            {children}
            </rocketContext.Provider>
       
            
        </>
    );
};

export default RocketProvider;