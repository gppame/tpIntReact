import React from 'react'
import './Header.css'
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <span><FaTasks /> </span>
      <h1> Lista de Tareas</h1>
    </div>
  )
}

export default Header
