export const notExpanded=(isExpanded)=>{
    return (dispatch)=>{
        dispatch({
            type: "notExpanded",
            payload: isExpanded
        });
    }
}