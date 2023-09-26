
import Rocket from './Rocket';


const rocktetsData=async()=>{
   
        const request= await fetch("https://api.spacexdata.com/v4/rockets");
       return await request.json();
    }

const Rocketsapp = async() => {
    const data= await rocktetsData();

    return (
        <div>
            {data && data.map((item)=>
            <Rocket key={item.id} data={item}/>)}
            
            
        </div>
    );
};

export default Rocketsapp;