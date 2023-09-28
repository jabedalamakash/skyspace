'use client'
import React, { useState } from 'react';
import { missionContext } from './SkyContext';

const MissionProvider = ({children}) => {
    const[missionReserved,setmissionReserved]=useState([]);
    



          const handlemissionR=(mission)=>{
                if(!missionReserved.includes(mission)){
                  setmissionReserved([...missionReserved,mission]);
                 
                }
                else{
                  alert('you are already an active member');
                }

  
  }

//   console.log(missionReserved);

  const missionDelete =(id)=>{
    // alert('mission deleted')
    
    // confirm('Are you sure you want to delete');
    const newData=missionReserved.filter((mission)=> mission.mission_id!== id);
    return setmissionReserved([...newData]);
  }
    return (
        <div>
            <missionContext.Provider value={{handlemissionR,missionDelete,missionReserved}}>
            {children}
            </missionContext.Provider>
        </div>
    );
};

export default MissionProvider;