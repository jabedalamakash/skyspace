'use client'
import React, { useState } from 'react';
import { rocketContext } from './SkyContext';

const RocketProvider = ({children}) => {
    const[rocketReserved,setrocketReserved]=useState([])

    const[cancel,setCancel]=useState(false);

          const handlerocketR=(rocket)=>{
                if(!rocketReserved.includes(rocket)){
                  setrocketReserved([...rocketReserved,rocket]);
                  setCancel(true);
                }
                else{
                  alert('rocket has already reserved');
                }

  
  }

  const rocketDelete =(id)=>{
    // alert('rocket deleted')
    
    confirm('Are you sure you want to delete');
    setCancel(false);
    const newData=rocketReserved.filter((rocket)=> rocket.id!== id)
    return setrocketReserved([...newData]);
  }

    return (
        <>
           <rocketContext.Provider value={{rocketDelete,handlerocketR,rocketReserved,cancel}}>
            {children}
            </rocketContext.Provider>
       
            
        </>
    );
};

export default RocketProvider;