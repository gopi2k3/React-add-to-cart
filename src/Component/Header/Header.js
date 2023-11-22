import React, { useState,useContext, useEffect } from 'react'
import './Header.css'
import{BsSearch} from'react-icons/bs'
import{MdOutlineLocationOn} from'react-icons/md'
import{BsCart4,BsFillPersonFill} from'react-icons/bs'
import{FaRupeeSign} from'react-icons/fa'
import{AiFillHeart} from'react-icons/ai'
import{RxHamburgerMenu} from'react-icons/rx'
import Logo from '../../Component/image/amz.png'
import { useNavigate } from 'react-router-dom'
import { globalState } from "../Body/Context.js";
const Header=(a)=>{
   let{State,dispatch}=useContext(globalState)
   let nav=useNavigate()
 const fav=()=>{
   nav('/Page2')
 }
  const card=()=>{
   nav('/Page3')
  }
const[input,setInput]=useState('')
 const[value,setValue]=useState([])
const[Boo,setBoo]=useState(false)
console.log(Boo)
//  console.log(inputvalue,input)
  useEffect(()=>{
   if(input==''){
      setValue([])
   }
   else{
    let a=State.arr.filter((a,i)=>{
       return a.info.toLowerCase().includes(input.toLowerCase())
   })
   setValue(a)
   }
},[input])
const handle2=(e)=>{
   // let a=State.arr.filter((a,i)=>{
   //    return a.id==e
   // })
   // setValue(a)
//   setInput(a.name)
// dispatch({type:'UpdateSearch', payload:a})
}
  console.log(value,State.arr)


  
   return(<div>


    <header>
        <nav>
         <div className='head-col1'> 
            <img src={Logo} alt=''/>
         </div>
         <div className='head-col3  align-items-center'>
            <div className='location-icon '><MdOutlineLocationOn/></div>
            <div>
            <p>Delivery To</p>
            <h3>Update Location</h3>
            </div>
         </div>
         <div className='head-col2 '>
            <input type='text' name='haed-input' value={input}onChange={(e)=>setInput(e.target.value)}/>
            <i className='icon-div' onClick={()=>a.hand(value,setBoo(true))}>
                 <BsSearch/>
            </i>
         </div>
         <div className='head-col4  align-items-center'>
         <div className='icon d-flex align-items-center' onClick={fav}>
               <h2>
               <AiFillHeart/>
               </h2>
               <h2>Fav</h2>
              </div>
              <div className='icon d-flex align-items-center' onClick={card}>
               <h2 >
               <BsCart4/>
               </h2>
               <h2>Cart</h2>
              </div>
              <div className='icon-2  align-items-center' >
               
               <h2>Login</h2>
              </div>
             
              <div className='icon-2 align-items-center'>
               
               <h2>Sign up</h2>
              </div>
         </div>
         <div className='head-col5'>
         <RxHamburgerMenu/>
         </div>
       
        </nav>
    </header>
    {value.length?<section className='search-bar'>
      <div className='search-row'>
         <div>
            {
               value.map((e,i)=>{
                  return(<div className='nav-content'onClick={()=>handle2(e.id)} key={i}style={{display:'flex',alignItems:'center',width:'95%',margin:'auto',borderBottom:'1px solid gray'}}>
                     <div style={{width:'20%'}}><img style={{width:'60%',height:'40px'}}src={e.src}/></div>
                        
                        <div style={{width:'20%'}}><h4 style={{margin:'0'}}>{e.name}</h4></div>
                        <div style={{width:'35%'}}><h6 style={{margin:'0'}}>{e.info}</h6></div>
                        <div style={{width:'25%',textAlign:'center'}}><h4 style={{margin:'0'}}>{e.price}<i><FaRupeeSign/></i></h4></div>
                     </div>)
               })
            }
         </div>
      </div>

    </section>:''}
    </div>
   )
}


export default Header