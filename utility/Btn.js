export const ReserveBtn=({name})=>{
    return<>
    <button className='bg-blue-600 border-2 border-blue-600 rounded-md text-white px-5 py-3'>{name}</button>
    </>
}

export const CancelBtn=({cname})=>{
    return<>
    <button className='bg-transparent border-2  rounded-md px-5 py-3 border-red-800   text-black '>{cname}</button>
    </>
}