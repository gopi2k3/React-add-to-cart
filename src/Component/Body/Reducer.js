import Product from'../../Product.json'


export const initaialState={

    
    arr:Product.all,
    

}
console.log(initaialState.arr)

export const Reducer=(State,action)=>{

    if(action.type==='UpdateFav'){
        return{...State,arr:action.payload}

    }
    else if(action.type==='UpdateCount'){
        return{...State,arr:action.payload}
    }
    else if(action.type==='UpdateMinus'){
        

        return{...State,arr:action.payload}
        
    }
    else if(action.type==='UpdtaCard'){
        return{...State,arr:action.payload}
    }
    else if(action.type==='UpdateSearch'){
        return{...State,arr:action.payload}
    }
  


}