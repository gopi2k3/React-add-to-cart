import React, { useContext, useEffect, useState } from "react";
import { globalState } from "./Context";
import{AiFillHeart,AiOutlinePlus,AiOutlineMinus}from'react-icons/ai'
import{BsFillCartCheckFill}from'react-icons/bs'
import Carousel from "../Carousel/Carousel.js";
import'./Body.css'
import Head from '../Header/Header.js'
import{useNavigate} from'react-router-dom'
const Home=()=>{
let{State,dispatch}=useContext(globalState)
const[arr,setArr]=useState(State.arr)

const fav=(id)=>{
  console.log('Click')
  let x=arr.map((a,i)=>{
    return a.id==id? {...a,isBoolean:!a.isBoolean}:a
  })
  console.log('click',x)
  setArr(x)
  dispatch({type:'UpdateFav' ,payload:x})
}



const count=(id)=>{

    let changecount=arr.map((a,i)=>{
        return a.id==id? {...a,isCard:!a.isCard}:a
    })
    setArr(changecount)
    dispatch({type:'UpdateCount' ,payload:changecount})
}
const cardplus=(ab)=>{
    
    let x=arr.map((a,i)=>{
        return a.id==ab.id? {...a,count:++a.count}:a
      })
      setArr(x)
      dispatch({type:'UpdateCount' ,payload:x})
}
const cardminus=(ab)=>{
   
      if(ab.count>1){
        
        let x=arr.map((a,i)=>{
            return a.id==ab.id? {...a,count:--a.count}:a
          })
      
       setArr(x)
          dispatch({type:'UpdateCount' ,payload:x})
        }
      else {
       
        let changecount=arr.map((a,i)=>{
            return a.id==ab.id? {...a,isCard:!a.isCard}:a
        })
       
        setArr(changecount)
        dispatch({type:'UpdateCount' ,payload:changecount})
      }
      
}

useEffect(()=>{

 setArr(arr)
 
},[arr])
const handle=(e)=>{
  console.log(e)
 if(e.length!=0){
    // dispatch({type:'UpdateCount' ,payload:e})
    setArr(e)


  
 }
 else if(e.length==0){
  console.log('ok')
  setArr(State.arr)
  console.log(State.arr)
 }
 
 }
let nav=useNavigate()
const moveDetail=(id)=>{
  nav(`/Page4?key=${id}`)
}


const handleSelect=(e)=>{

  console.log(e)
  }
    return(<div>
        <Head hand={handle} hands={handleSelect}/>
        <section className="carousel-sec" style={{width:'95%',margin:'120px  auto 0 auto'}}>
       <Carousel/>
        </section>
        <section className="body-sec">
    <div className="body-row">
     {
        arr.map((value,index)=>{
            return(<div key={index} className="card">
                <div className="card-items">
                <div style={{padding:'10px'}}>
                <img src={value.src} onClick={()=>moveDetail(value.id)}/>
                </div>
                    <div className="card-content" style={{paddingLeft:'10px'}}>
                        <h2 style={{margin:'0'}}>Name:{value.name}</h2>
                        <p>Price:{value.price}</p>
                    </div>
                    <div className="icons" >
                       {value.isBoolean?<i onClick={()=>fav(value.id)} style={{color:'red'}}><AiFillHeart/></i>:<i onClick={()=>fav(value.id)} style={{color:'black'}} ><AiFillHeart/></i>} 
                       {/* {value.isBoolean?<i onClick={()=>fav(value.id)} style={{color:'red'}}><AiFillHeart/></i>:<i onClick={()=>fav(value.id)} ><AiFillHeart/></i>}  */}

                      {value.isCard? <div className="btn-div"><i onClick={()=>cardminus(value)}style={{marginLeft:'15px'}}><AiOutlineMinus/></i><span style={{backgroundColor:'white'}}>{value.count}</span><i onClick={()=>cardplus(value)}style={{marginRight:'15px'}}><AiOutlinePlus/></i></div>:<button  onClick={()=>count(value.id)}><BsFillCartCheckFill/>Add To Cart</button>}  
                       
                  </div>
                    </div>
            </div>)
        })
     }
    </div>
    </section>
    </div>)
}

export default Home