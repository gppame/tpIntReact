// Realizado por :
//                  Agüero, Gerson
//                  Gomez Pacheco, Pamela
//                  Ramallal, Mario
//



import React, { useEffect, useState } from 'react';
import { TaskForm, TaskList,Footer, Header } from './Components';
import './App.css'


const App = () => {

  const [tasks,setTasks] =useState([])
  const [currentTasks, setCurrentTasks] =useState ([])
  const [searchString,setSearchString] = useState ('')

  const addTask = (task) =>{
    setTasks([...tasks,task])
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));}

  const deleteTask =(taskId)=>{
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));}
    
  const completeTask = (taskId)=>{
    setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === taskId ? { ...task, state: !task.state } : task )
    );
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, state: !task.state } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

   const handleChangeFilter = (evento) => {
     setSearchString(evento.target.value)}

  
  useEffect(()=> {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    setCurrentTasks(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLocaleLowerCase())))
       },[searchString,tasks])


  return (
    < div className='bodyApp'>
      <Header/>
      <input id='inputBuscarTarea' type="text" placeholder='Buscar tarea por título...' value ={searchString} onChange={handleChangeFilter}/>
      <TaskForm addTask={addTask}/>
      <TaskList tasks ={currentTasks} deleteTask={deleteTask} completeTask={completeTask}/>
      <Footer/>
    </div>
  );

};export default App;
