
export const iconHandler =(ID)=>{
    return {type:'SHOW_ICON',id:ID}
}

export const clear =()=>{
    return {type:'CLEAR'}
}

export const addProblem =(item)=>{
    return {type:'ADDPR',item:item}
}

export const remove =(id)=>{
    return {type:'REMOVE',id:id}
}