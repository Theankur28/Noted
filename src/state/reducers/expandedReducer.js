const reducer= (state=false,action)=>{
    if(action.type==="notExpanded"){
        return true;
    }else{
        return state;
    }
}

export default reducer;