import React from 'react'
import { BsTrash } from "react-icons/bs";
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
  return (
    <div className='contenedorTaskItem'>
      <div className='cajaTaskItem'>
          <h3> {task.title}</h3>
          <p> {task.description}</p>
          <span>{task.createAt}</span>
                    <button onClick={()=>deleteTask(task.id)}> Eliminar <BsTrash /> </button>       
        
      </div>
  </div>
  )
}

export default TaskItem
