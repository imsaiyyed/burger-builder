const initialState={
  
    totalPrice:30,
    placed:false
    
}


const reducer=(state=initialState,action)=>{

    switch(action.type){
        case 'UPDATEPRICE':
            let newPrice=state.totalPrice;
            newPrice=newPrice+action.price;
        return {...state,totalPrice:newPrice}
        case 'PLACE':
        return {...state,placed:true}
        default:
            return  state;
    }
 
}

export default reducer;