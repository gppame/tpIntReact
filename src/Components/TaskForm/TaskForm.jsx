import React, { useState } from 'react'
import { TiPlusOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa6";
import { FcCancel } from "react-icons/fc";
import './TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({addTask}) => {

  const [isOpenModal,setIsOpenModal] = useState(false)

  const handleCloseModal =() => {
    setIsOpenModal(false)}

  const handleOpenModal =() => {
        setIsOpenModal(true)}

  const handleSubmitTask =(evento) => {
    evento.preventDefault()
    const title = evento.target.title.value
    const description = evento.target.description.value
    const task = {title, description, createAt: new Date().toDateString(),id: uuidv4(),state:false}
    addTask(task)
    handleCloseModal()}
    

return (
    <div > 
         <div className='btn-AddTask'>
            <button  onClick={handleOpenModal}> Agregar tarea <TiPlusOutline /> </button>
          </div>
            { 
            isOpenModal && 
                <div className='modal-background'>
                    <div className='modal'>
                        <h2>Agregar nueva tarea</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className="input-container">
                                <label htmlFor="title"> Título de la tarea: </label>
                                <input type="text" id ='title' nombre='title'/>
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Descripción de la tarea</label>
                                <textarea id='description' nombre='description' ></textarea>
                            </div>
                            <div className='btn-container'>
                                <button onClick={handleCloseModal}>Cancelar <FcCancel /></button>
                                <button type ='submit'>Agregar < FaCheck /></button>
                            </div>
                        </form>
                    </div>
                 </div>    
            }
    </div>        
  )
};

export default TaskForm
