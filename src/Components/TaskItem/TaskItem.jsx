import React from 'react'
import { BsTrash } from "react-icons/bs";
import './TaskItem.css'

const TaskItem = ({task, deleteTask, completeTask }) => {
  return (
    <div className='bodyTaskItem'>   
       <div className='contenedorTaskItem'>
          <div className='cajaTaskItem'>
              <h3> Título: {task.title}</h3>
              <p> Descripción: {task.description}</p>
              <span>Fecha Creación: {task.createAt}</span>
          </div>
          <div className='btnsCajaTaskItem' >
              <button onClick={()=>deleteTask(task.id)}> Eliminar  <BsTrash /> </button>  
              <button onClick={()=>completeTask(task.id)}>{ task.state ? 'Tarea Completada' : 'Finalizar Tarea'}</button>
          </div>
        </div>
  </div>

  )
}

export default TaskItem
