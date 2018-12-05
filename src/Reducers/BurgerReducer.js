const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    warning:false
    
}


const reducer=(state=initialState,action)=>{

    switch(action.type){
        case 'UPDATE':
            console.log(state);
        return {...state,ingredients:{...action.ingredients}}
        case 'UPDATEWARNING':
            console.log(state);
        return {...state,warning:action.val}
        default:
            return  state;
    }
 
}

export default reducer;