import React from 'react'
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css'

const TaskList = ({tasks,deleteTask, completeTask }) => {
  return (
    <div className='bodyTaskList'>
        {   tasks.length == 0 
            ? <h2>Aun no tienes tareas</h2> 
            : tasks.map(task =>(
                <TaskItem task ={task} key={task.id} deleteTask ={deleteTask} completeTask ={completeTask }/>))
        }
    </div>
  );
}

export default TaskList
