import React,{useContext,useRef,useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import { Context } from "../context/Context";
import classes from "./AddProblem.module.css";
import {MdCancel} from 'react-icons/md'
import { addProblem } from "../store/action";

export default function AddProblem() {
    const [error,setError] =useState(false)
    const [touch,setTouch] = useState(false)
    const [value,setValue] =useState('')
const showAddHandler = useContext(Context).showHandler
const dispatch =useDispatch()
const textValue = useRef()
const changeHandler=(e)=>{
setValue(e.target.value)
setTouch(true)
}
useEffect(()=>{
    if(value.trim().length===0){
        setError(true)
    }else{
        setError(false)
    }
},[value])

const addPrHandler = ()=>{
    const enteredValue = textValue.current.value
    console.log(enteredValue)
    const item ={
        text:enteredValue,
        id:Math.random(),
        showIcon:false
    }
    if(enteredValue.trim().length=== 0){
    setError(true)
    return
    }
dispatch(addProblem(item))
showAddHandler()
}

  return (
    <>
    <div className={classes.backDrop} onClick={showAddHandler}></div>
      <div className={classes.centered}>
        <form>
        <div className={classes.cancel} onClick={showAddHandler}>
        <MdCancel/>
        </div>
          <label>Problem</label>
          <input className={error && touch ? classes.err : ''} type="text" placeholder="Enter your problem" ref={textValue} onChange={changeHandler}/>
          {error && touch && <p style={{color:'red',margin:0}}>Text does not exist,please enter the text</p>}
          <div className={classes.btn}>
            <button type="button" onClick={addPrHandler}>ADD PROBLEM</button>
          </div>
        </form>
      </div>
      </>
  );
}
