import React from 'react'
import {useSelector} from 'react-redux'
import classes from './Completed.module.css'


export default function CompletedModal() {
    const compPr = useSelector(state=>state.items.completedProblems)
  return (
    <div className={classes.backDrop}>
        <div className={classes.tasks}>
        <h1>Completed</h1>
       <div className={classes.list}>
        {compPr.map(item=>{
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
