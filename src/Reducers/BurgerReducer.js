const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:0
    
}


const reducer=(state=initialState,action)=>{

    switch(action.type){
        case 'UPDATE':
            console.log(state);
        return {...state,ingredients:{...action.ingredients}}
        default:
            return  state;
    }
 
}

export default reducer;