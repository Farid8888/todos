import React from 'react'
import {useSelector} from 'react-redux'
import classes from './ActiveModal.module.css'


export default function ActiveModal() {
    const activePr = useSelector(state=>state.items.activeProblems)
  return (
    <div className={classes.backDrop}>
        <div className={classes.tasks}>
        <h1>Active</h1>
       <div className={classes.list}>
        {activePr.map(item=>{
          return(
            <div key={item.id}>
          <div className={`${classes.circle}`}>
          <div className={classes.checkmark}></div>
          </div>
          <span>{item.text}</span>
          </div>
          )
        })}
       </div>
    </div>
    </div>
  )
}
