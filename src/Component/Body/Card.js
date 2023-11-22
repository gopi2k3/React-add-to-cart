import React, { useContext, useEffect, useState } from "react";
// import{AiFillHeart}from'react-icons/ai'
import{AiFillHeart,AiOutlinePlus,AiOutlineMinus}from'react-icons/ai'

import{BsFillCartCheckFill}from'react-icons/bs'
import './Card.css'
import { globalState } from "./Context";

const Card=()=>{
    const[arr,setArr]=useState([])

    
    

let{State,dispatch}=useContext(globalState)

useEffect(()=>{
    let y=State.arr.filter((a,i)=>{
        return a.isCard==true
    })
    setArr(y)
},[State])

const fav=(id)=>{
    let x=State.arr.map((a,i)=>{
      return a.id==id? {...a,isBoolean:!a.isBoolean}:a
    })
    console.log('click',x)
    dispatch({type:'UpdateFav' ,payload:x})
  }

const count=(id)=>{

    let changecount=State.arr.map((a,i)=>{
        return a.id==id? {...a,isCard:!a.isCard}:a
    })
    dispatch({type:'UpdateCount' ,payload:changecount})
}
const cardplus=(ab)=>{
    
    let x=State.arr.map((a,i)=>{
        return a.id==ab.id? {...a,count:++a.count}:a
      })
      
      dispatch({type:'UpdateCount' ,payload:x})
}
const cardminus=(ab)=>{
   
      if(ab.count>1){
        
        let x=State.arr.map((a,i)=>{
            return a.id==ab.id? {...a,count:--a.count}:a
          })
       console.log(x)
          dispatch({type:'UpdateCount' ,payload:x})
        }
      else {
       
        let changecount=State.arr.map((a,i)=>{
            return a.id==ab.id? {...a,isCard:!a.isCard}:a
        })
        console.log(changecount)
        dispatch({type:'UpdateCount' ,payload:changecount})
      }
      
}

console.log(arr)

    return(<div>
        {arr.length?<section className="body-sec">
        <div className="body-row">
        {
            arr.map((value,index)=>{
                return(<div key={index} className="card">
                    <div style={{padding:'10px'}}>
                    <img src={value.src}/>
                    </div>
                                            <div className="card-content" style={{paddingLeft:'10px'}}>
                            <h2>Name:{value.name}</h2>
                            <p>Price:{value.price}</p>
                        </div>
                        <div className="icons" >
                        {value.isBoolean?<i onClick={()=>fav(value.id)} style={{color:'red'}}><AiFillHeart/></i>:<i onClick={()=>fav(value.id)} style={{color:'black'}} ><AiFillHeart/></i>} 
                        {value.isCard? <div className="btn-div"><i onClick={()=>cardminus(value)}style={{marginLeft:'15px'}}><AiOutlineMinus/></i><span style={{backgroundColor:'white'}}>{value.count}</span><i onClick={()=>cardplus(value)}style={{marginRight:'15px'}}><AiOutlinePlus/></i></div>:<button  onClick={()=>count(value.id)}><BsFillCartCheckFill/>Add To Cart</button>}  
                            
                        </div>
                </div>)
            })
         }
        </div>
        </section>:<div style={{height:'87vh',display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{width:'50%'}}src={'https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png'}/></div>}


        
  
    </div>)
}

export default Card