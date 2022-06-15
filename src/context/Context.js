import {createContext,useState} from 'react'



export const Context =createContext({
    show:false,
    showHandler:()=>{}
})



export const ContextProvider =(props)=>{
    const [show,setShow] = useState(false)
    const showHandler=()=>{
      setShow((prevSt=>{
        return !prevSt
      }))
    }
    return(
        <Context.Provider value={{show:show,showHandler:showHandler}}>
            {props.children}
        </Context.Provider>
    )
}

