import React, { useReducer } from'react'
import Page1 from'./Component/Body/Body.js'
import Page2 from'./Component/Body/Fav.js'
import Page3 from'./Component/Body/Card.js'
import Page4 from'./Component/Detail/Detail.js'
// import Page1 from './Component/Homepg/Body.js'

import { globalState } from './Component/Body/Context.js'
import{BrowserRouter,Routes, Route} from'react-router-dom'
import { initaialState,Reducer } from './Component/Body/Reducer.js'
const Routing=()=>{
 let[State,dispatch]=useReducer(Reducer,initaialState)
    return(<div>
        <globalState.Provider value={{State,dispatch}}>
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Page1/>}/>
           <Route path='/Page2' element={<Page2 />}/>
           <Route path='/Page3' element={<Page3 />}/>
           <Route path='/Page4' element={<Page4 />}/>
        </Routes>
        </BrowserRouter>
        </globalState.Provider>

    </div>)
}


export default Routing