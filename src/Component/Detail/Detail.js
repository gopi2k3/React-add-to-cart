import React, { useContext, useEffect, useState } from "react";
import { globalState } from "../Body/Context";
import{useSearchParams} from'react-router-dom'
import'./Detail.css'
const Detail=()=>{

    let {State,dispatch}=useContext(globalState)
    console.log(State.arr)

    const[local,setLocal]=useState([])
  let[param]=useSearchParams()
  
  console.log(local)
    useEffect(()=>{
    if(param.get('key')==null||param.get('key')==undefined){

    }
    else{
        const a=State.arr.filter((e,i)=>{
            return e.id==param.get('key')
        })
        setLocal(a)
        console.log(a)
    }


    },[])


    return(<div>
         <h1 style={{textAlign:'center'}}>Detail</h1>

{
    local.map((value,index)=>{
      
        return(
        <div  className="card" style={{width:'30%',margin:'auto',textAlign:'center',padding:'10px'}}>
            
            
            <img src={value.src} style={{width:'40%'}}/>
            <h2>{value.info}</h2>
            <h3><span>Price:</span>{value.price}.RS</h3>
            <button style={{backgroundColor:'orange',padding:'12px 15px',marginTop:'14px'}}>Add to cart</button>
                </div>
                )
        
    })
}
    </div>)
}

export default Detail