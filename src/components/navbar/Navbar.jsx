import React from "react";
import Avatar from '../../icons/Avatar.png';
import Dashboard from '../../icons/Dashboard.svg';
import Forum from '../../icons/forum.svg';
import Challanges from '../../icons/challenges.svg';
import Tasks from '../../icons/Tasks.svg';
import Profile from '../../icons/profile.svg';

const NavBar = () => {
  return (
    <aside className="navBar">
      <div className="navBar-user">
        <a href="#" >Carlos Meneses</a>
        <img src={ Avatar }alt=""/>
      </div>
      <div className="navBar-menu">
        <ul>
          <li>
            <a href="#"><img className="img-icon" src={Dashboard} alt="" /><p className="navBar-menu__text">Dashboard</p></a>
          </li>
          <li>
            <a href="#"><img className="img-icon" src={Forum} alt="" /><p className="navBar-menu__text">Forum</p></a>
          </li>
          <li>
            <a href="#"><img className="img-icon" src={Challanges} alt="" /><p className="navBar-menu__text">Challenges</p></a>
          </li>
          <li>
            <a href="#"><img className="img-icon" src={Tasks} alt="" /><p className="navBar-menu__text">Tasks</p></a>
          </li>
          <li>
            <a href="#"><img className="img-icon" src={Profile} alt="" /><p className="navBar-menu__text">Profile</p></a>
          </li>
        </ul>
      </div>
    </aside>
  )
}


export default NavBar;