import React, { useState } from 'react'
import Draggable from 'react-draggable'
export default function Text() {
    const [editmod, seteditmod] = useState(0)
    const [val,setVal] = useState("Double click to chage")
  return (
    <Draggable>
        {
            editmod ? 
            <input onDoubleClick={()=>{seteditmod(false)}} value={val} onChange={(e)=>{setVal(e.target.value)}}/> 
            : 
            <h5 onDoubleClick={()=>{seteditmod(true)} }>{val}</h5>
        }
    </Draggable>
  )
}
