import React, { useContext, useEffect, useState } from "react";
import{AiFillHeart,AiOutlinePlus,AiOutlineMinus}from'react-icons/ai'
import{BsFillCartCheckFill}from'react-icons/bs'
import './Fav.css'
import { globalState } from "./Context";

const Fav=()=>{
    const[arr,setArr]=useState([])

let{State,dispatch}=useContext(globalState)

useEffect(()=>{
    let y=State.arr.filter((a,i)=>{
        return a.isBoolean==true
    })
    setArr(y)
},[State])

const fav=(id)=>{
    let x=arr.map((a,i)=>{
      return a.id==id?{...a,isBoolean:!a.isBoolean}:a
    })
    console.log(x);
    
    setArr(x)

    let y=State.arr.map((a,i)=>{
        return a.id==id?{...a,isBoolean:!a.isBoolean}:a
      })
      
    dispatch({type:'UpdateFav' ,payload:y})
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
                        {value.isBoolean?<i onClick={()=>fav(value.id)} style={{color:'red'}}><AiFillHeart/></i>:<i onClick={()=>fav(value.id)} style={{color:'black'}}><AiFillHeart/></i>} 
                            <i onClick={()=>count(value.id)}><BsFillCartCheckFill/></i>
                            {value.isCard? <div className="btn-div"><i onClick={()=>cardminus(value)}style={{marginLeft:'15px'}}><AiOutlineMinus/></i><span style={{backgroundColor:'white'}}>{value.count}</span><i onClick={()=>cardplus(value)}style={{marginRight:'15px'}}><AiOutlinePlus/></i></div>:<button  ><BsFillCartCheckFill/>Add To Cart</button>}
                        </div>
                </div>)
            })
         }
        </div>
        </section>:<div style={{height:'85vh',display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{width:'50%'}}src={'https://i.pinimg.com/736x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg'}/></div>}
  
    </div>)
}

export default Fav