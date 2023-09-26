"use client"
import { useContext } from "react";
import { dragonContext, missionContext, rocketContext } from "@/context/SkyContext";



const page = () => {
  
const {dragonReserved,dragonDelete}= useContext(dragonContext);
const {rocketDelete,rocketReserved}=useContext(rocketContext);
const {missionReserved,missionDelete}=useContext(missionContext);

    return( 
    <>

    <section className="grid grid-col-1 mx-auto gap-10 sm:grid-cols-3">
    {/* place-content-center place-items-center */}

        <div className="text-center">
            <h1 className="font-bold text-3xl  mb-5 sm:mb-10">My Dragons </h1>
            {dragonReserved.length==0 ? <h1>No Dragons reserved!</h1>:
            dragonReserved.map((dragon)=>{
                return <main key={dragon.id} 
                className="flex items-center justify-between mx-auto sm:w-[100%] rounded-lg mb-5 border-2 px-3 py-2">
                <p>{dragon.name}</p>
                <button className='text-white  bg-red-600 text-sm rounded-md px-2 py-2'
                onClick={()=> dragonDelete(dragon.id)}>Delete</button>
                </main>

            })}
           
            

            
        </div>

        <div className="text-center ">

        <h1 className="font-bold text-3xl mb-10">My Rockets </h1>
            {rocketReserved.length==0 ? <h1>No Dragons reserved!</h1>:
            rocketReserved?.map((rocket)=>{
                return <main key={rocket.id} 
                className="flex items-center justify-between mx-auto sm:w-[100%] rounded-lg mb-5 border-2 px-3 py-2">
                <p >{rocket.name}</p>
                <button className='text-white  bg-red-600 text-sm rounded-md px-2 py-2' 
                onClick={()=>rocketDelete(rocket.id)}>Delete</button>
                </main>

            })}



        </div>

        <div className="text-center " >

        <h1 className="font-bold text-3xl mb-10">My Missions </h1>
            {missionReserved.length==0 ? <h1>No Missions Joined!</h1>:
            missionReserved?.map((member)=>{
                return <main key={member.mission_id}
                 className="flex items-center justify-between mx-auto sm:w-[100%] rounded-lg mb-5 border-2 px-3 py-2">
                    <p className="">{member.mission_name}</p>
                <button 
                className='text-white  bg-red-600 text-sm rounded-md px-2 py-2'
                onClick={()=> missionDelete(member.mission_id)}>Leave Mission</button>
                </main>

            })}


        </div>



        </section>

        </>
    )
};

export default page;