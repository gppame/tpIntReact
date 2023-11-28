import React, { useEffect, useState } from 'react';
import { TaskForm, TaskList,Footer, Header } from './Components';

const App = () => {

  const [tasks,setTasks] =useState([])
  const [currentTasks, setCurrentTasks] =useState ([])
  const [searchString,setSearchString] = useState ('')


  const addTask = (task) =>{
    setTasks([...tasks,task])}

  const deleteTask =(taskId)=>{
    setTasks(tasks.filter(task => task.id !== taskId))}
  
  const completeTask = (taskId)=>{
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === taskId ? { ...task, state: !task.state } : task
    )
  );
};

   const handleChangeFilter = (evento) => {
     setSearchString(evento.target.value)}

  
  useEffect(()=> {
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLocaleLowerCase())))
       },[searchString,tasks])

  return (
    <>
      <Header/>
      <div>
        <input type="text" placeholder='Buscar tarea por título...' value ={searchString} onChange={handleChangeFilter}/>
      </div>
      <TaskForm addTask={addTask}/>
      <TaskList tasks ={currentTasks} deleteTask={deleteTask} completeTask={completeTask}/>
     
     <Footer/>
    </>
  );

};export default App;
