
// "use client"

import Mission from './Mission';


const missionsData= async()=>{
    const request= await fetch("https://api.spacexdata.com/v3/missions");
    return await request.json();   

}

const Missionsapp = async() => {
    // const[data,setData]=useState([]);
    const data= await missionsData();
    // console.log(data);

    // useEffect(()=>{
    //     missionsData();
    // },[])

    //  console.log(data);

    return (
        <>

        <Mission  data={data} />

           
            
        </>
    );
};

export default Missionsapp;