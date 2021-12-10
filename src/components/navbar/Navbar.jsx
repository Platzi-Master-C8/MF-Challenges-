import React from 'react'
import Avatar from '../../icons/Avatar.png'
import Dashboard from '../../icons/Dashboard.svg'
import Forum from '../../icons/forum.svg'
import Challanges from '../../icons/challenges.svg'
import Tasks from '../../icons/Tasks.svg'
import Profile from '../../icons/profile.svg'
import datos from '../../../data.json'


const { data } = datos;



const NavBar = () => {
  return (
    <div className="item-navbar">
      <aside className='navBar'>
      <div className='navBar-user'>
        <a href='#'> { data.name } </a>
        <img src={Avatar} alt='' />
      </div>
      <div className='navBar-menu'>
        <ul>
          <li>
            <a href='#'><img id='img-icon' src={Dashboard} alt='' /><p className='navBar-menu__text'>Estadisticas</p></a>
          </li>
          <li>
            <a href='#'><img id='img-icon' src={Forum} alt='' /><p className='navBar-menu__text'>Foro</p></a>
          </li>
          <li>
            <a href='#'><img id='img-icon' src={Challanges} alt='' /><p className='navBar-menu__text'>Desafios</p></a>
          </li>
          <li>
            <a href='#'><img id='img-icon' src={Tasks} alt='' /><p className='navBar-menu__text'>Tareas</p></a>
          </li>
          <li>
            <a href='#'><img id='img-icon' src={Profile} alt='' /><p className='navBar-menu__text'>Perfil</p></a>
          </li>
        </ul>
      </div>
    </aside>
    </div>
  )
}

export default NavBar
