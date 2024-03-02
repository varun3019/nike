import React from 'react'
import Data from '../assets/Data'

export const Button = ({menuitems,setItems,filterItems}) => {
  return (
    <div className='flex justify-center'>
        {
            menuitems.map(val=>(
                <button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 " onClick={()=>filterItems(val)}>
                    {val}
                </button>
            ))
        }
         <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2  " onClick={()=>setItems(Data)}>
                    All
                </button>
    </div>
  )
}
