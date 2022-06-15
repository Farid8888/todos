import React,{useReducer,useContext} from 'react'
import { Context } from '../context/Context'
import classes from './Todos.module.css'
import {FiChevronDown} from 'react-icons/fi'
import {useSelector,useDispatch} from 'react-redux'
import { iconHandler,clear,remove } from '../store/action'
import ActiveModal from './ActiveModal'
import CompletedModal from './CompletedModal'
import AddProblem from './AddProblem'

export default function Todos() {
  const items = useSelector(state=>state.items.problems)
  const totalAmount = useSelector(state=>state.items.totalAmount)
  const showAddHandler = useContext(Context).showHandler
  const showAddProblem = useContext(Context).show
  console.log(items)
  const dispatch = useDispatch()
const initialState ={
  all:true,
  active:false,
  completed:false
}
const Reducer = (state=initialState,action)=>{
  if(action.type === 'ALL'){
   return {all:true,active:false,completed:false}
  }
  if(action.type === 'ACTIVE'){
    return {all:false,active:true,completed:false}
   }
   if(action.type === 'COMPLETED'){
    return {all:false,active:false,completed:true}
   }
  return state
}
  const [navShow,dsch] = useReducer(Reducer,initialState)

  return (
    <div className={classes.todo}>
      {navShow.active && <ActiveModal/>}
      {navShow.completed && <CompletedModal/>}
      {showAddProblem && <AddProblem/>}
        <header >
            <h1>
                TODOS
            </h1>
        </header>
        <div className={classes.tasks}>
        <div className={classes.icon}><FiChevronDown color='rgba(128, 128, 128, 0.47)'/><h3>What needs to be done?</h3></div>
       <div className={classes.list}>
        {items.map(item=>{
          return(
            <div key={item.id}>
          <div className={`${classes.circle}  ${!item.showIcon ? classes.active : ''}`} onClick={()=>dispatch(iconHandler(item.id))}>
          <div className={classes.checkmark}></div>
          </div>
          <div className={classes.btnFlex}>
          <span className={`${item.showIcon ? classes.act : ''}`}>{item.text}</span>
          <div className={classes.delete}>
            <button type='button' onClick={()=>dispatch(remove(item.id))}>delete</button>
          </div>
          </div>
          </div>
          )
        })}
       </div>
       <div className={classes.navBar}>
        <div>{totalAmount} items left</div>
        <nav className={classes.nav}>
           <div className={navShow.all ? classes.active : ''} onClick={()=>dsch({type:'ALL'})}>All</div>
           <div className={navShow.active ? classes.active : ''} onClick={()=>dsch({type:'ACTIVE'})}>Active</div>
           <div className={navShow.completed ? classes.active :''} onClick={()=>dsch({type:'COMPLETED'})}>Completed</div>
        </nav>
        <div style={{cursor:'pointer'}} onClick={()=>dispatch(clear())}>Clear completed</div>
       </div>
       <div className={classes.btn}>
       <button type='button' onClick={showAddHandler}>Add</button>
       </div>
        </div>
    </div>
  )
}
