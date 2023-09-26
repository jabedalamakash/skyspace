'use client'
import { missionContext } from '@/context/SkyContext';
import React, { useContext } from 'react';

const Mission = ({data}) => {
    // console.log(data);
    // const {mission_id,mission_name,description}=data;
    const{handlemissionR,cancel,missionDelete,member,setMember}=useContext(missionContext);
    return (
        <>
        <section className='box-border'>

        <table className='table-auto overflow-x-auto'>
            <thead  className='text-center  '>
                <tr className=''>
                    <th className='border p-5'>Name</th>
                    <th className='border p-5'>Description</th>
                    <th className='border p-5'>Status</th>
                    <th className='border p-5'>Join</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((item)=>{
                return <tr className="even:bg-[#DFDFDF] odd:bg-white" key={item.mission_id}>
                    
                    <td className='p-5 font-bold border'>{item.mission_name}</td>
                    <td className='p-5 border'>{item.description}dev</td>
                    <td className='p-5 border'>{member}</td>
                    {/* <button className='p-5 border'>Join Member</button> */}
                    <td  className='p-5 border' >
                    {!cancel ? (<button onClick={()=>{
                    setMember("ACTIVE MEMBER");
                    handlemissionR(item);
                
                }} className='bg-blue-600  border-blue-600 rounded-md text-sm  text-white px-2 py-2'>Join Mission</button>)
                :(<button onClick={()=>{missionDelete(item.mission_id);
                    setMember("NOT A MEMBER");}} 
                className='text-white  bg-red-600 text-sm rounded-md px-2 py-2'>Leave Mission</button>)}
                </td>
                </tr>
            })}


            </tbody>
            
            
        </table>
        </section>
        </>
       
    );
};

export default Mission;