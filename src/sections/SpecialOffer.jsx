import { useState } from 'react'
import { Button } from '../Components/Button';
import Data from '../assets/Data'

const SpecialOffer = () => {
  const [item,setItems]=useState(Data);
  const menuitems=[...new Set(Data.map((val)=>val.category))];

  const filterItems = (cat)=>
  {
    const newItems = Data.filter((newval)=> newval.category===cat);
    setItems(newItems);
  }

  return (
    <div>
      <Button menuitems={menuitems} setItems={setItems} filterItems={filterItems}/>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        {item.map(val=>(
            <div  key= {val.key} className="card-body ">
            <figure><img src={val.img} alt="Album" /></figure>
            <h2 className="card-title">{val.sname}</h2>
            <p>{val.mrp}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialOffer