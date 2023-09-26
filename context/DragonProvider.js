"use client"
import { useState } from "react"
import { dragonContext} from "./SkyContext"

 const DragonPovider=({children})=>{
    const[dragonReserved,setDragonReserved]=useState([])

    const[cancel,setCancel]=useState(false);

    // const handleReser=()=>{
    //   setCancel(true);
    // }
    // const handleCancel=()=>{
    // setCancel(false);
    // alert("Cancelled");
    // }

          const handleDragonR=(dragon)=>{
                if(!dragonReserved.includes(dragon)){
                  setDragonReserved([...dragonReserved,dragon]);
                  //  setCancel(true);
                 
                  // document.getElementById(`${dragon.id}`).disabled;return
                }
                else{
                  alert('Dragon has already reserved');
                }
                
  
  }

  const dragonDelete =(id)=>{
    // alert('Dragon deleted')
    
    confirm('Are you sure you want to delete');
    // setCancel(false);
    const newData=dragonReserved.filter((dragon)=> dragon.id!== id)
    return setDragonReserved([...newData]);
  }



    return(
        <>
        <dragonContext.Provider value={{handleDragonR,dragonReserved,dragonDelete,cancel,setCancel}}>
        {children}
        </dragonContext.Provider>
        </>
 
    )
}
export default DragonPovider;
