import React from "react";
import '../styles/sideMenu.scss';
import Avatar from '../icons/Avatar.png';
import Dashboard from '../icons/Dashboard.svg'
import Forum from '../icons/forum.svg'
import Challanges from '../icons/challenges.svg'
import Tasks from '../icons/Tasks.svg'
import Profile from '../icons/profile.svg'

const NavBar = () => {
  return (
    <aside className="navBar">
      <div className="navBar-user">
        <a href="#" >Carlos Meneses</a>
        <img src={ Avatar }alt=""/>
      </div>
      <div className="navBar-menu">
        <ul>
          <li><a href="#"><img src={Dashboard } alt=""/>Dashboard</a></li>
          <li><a href="#"><img src={Forum} alt=""/>Forum</a></li>
          <li><a href="#"><img src={Challanges} alt=""/>Challenges</a></li>
          <li><a href="#"><img src={Tasks} alt=""/>Tasks</a></li>
          <li><a href="#"><img src= {Profile} alt=""/>Profile</a></li>
        </ul>
      </div>
    </aside>
  )
}


export default NavBar;