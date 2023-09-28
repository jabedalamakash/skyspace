"use client"
import { useState } from "react"
import { dragonContext} from "./SkyContext"

 const DragonPovider=({children})=>{
    const[dragonReserved,setDragonReserved]=useState([])

    


          const handleDragonR=(dragon)=>{
                if(!dragonReserved.includes(dragon)){
                  setDragonReserved([...dragonReserved,dragon]);
                }
                else{
                  alert('Dragon has already reserved');
                }
                
  
  }

  const dragonDelete =(id)=>{
    // alert('Dragon deleted')
    
    confirm('Are you sure you want to delete');
    const newData=dragonReserved.filter((dragon)=> dragon.id!== id)
    return setDragonReserved([...newData]);
  }



    return(
        <>
        <dragonContext.Provider value={{handleDragonR,dragonReserved,dragonDelete}}>
        {children}
        </dragonContext.Provider>
        </>
 
    )
}
export default DragonPovider;
