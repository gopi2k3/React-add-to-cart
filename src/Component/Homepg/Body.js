import React from "react";
import{useNavigate} from'react-router-dom'
import Header from "../Header/Header.js";

const Body=()=>{
let nav=useNavigate()
const Change=()=>{
    console.log('Click')
    nav('/Page2')
}
    return(<div>
        <Header/>
        <h4>Dewali Sales</h4>
        <img style={{width:'100%'}}src={'https://rukminim2.flixcart.com/fk-p-flap/50/50/image/a6130af4c343dad4.png?q=50'}/>
        <img style={{width:'100%'}}src={'https://rukminim2.flixcart.com/fk-p-flap/100/100/image/5f573f747c59e66b.jpg?q=50'}/>
   <button style={{margin:'100px 0'}} onClick={Change}>Next</button>
    </div>)
}

export default Body