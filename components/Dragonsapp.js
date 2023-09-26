
import Dragon from './Dragon';

const DragonsData=async()=>{
    const request= await fetch("https://api.spacexdata.com/v3/dragons");
    return await request.json();
}


   

const Dragonsapp = async() => {

    const data= await DragonsData();


    return (
        <div>
            
            {data && data.map((item)=>
         <Dragon key={item.id} data={item}/>)}
            
        </div>
    );
};

export default Dragonsapp;



