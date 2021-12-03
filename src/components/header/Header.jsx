import React from "react";
import Logo from '../../icons/LogoPlataforma1.png';
import Logo1 from '../../icons/section1.svg';
import Logo2 from '../../icons/section2.svg';
import Logo3 from '../../icons/section3.svg';
import Logo4 from '../../icons/section4.svg';
import Logo5 from '../../icons/section5.svg';
import Logo6 from '../../icons/section6.svg';
import Avatar from '../../icons/Sin avatar.svg';

const Header = () => {
    return (
      <header className="header">
        <div className="header-logo">
          <a href="$">
            <img src= {Logo} alt="Logo de la pagina" />
          </a>
        </div>
        <nav className="header-navBar">
          <a href="#"><img src= {Logo1} alt=""/></a>
          <a href="#"><img src= {Logo2} alt=""/></a>
          <a href="#"><img src= {Logo3} alt=""/></a>
          <a href="#"><img src= {Logo4} alt=""/></a>
          <a href="#"><img src={Logo5} alt="" /></a>
          <a href="#"><img src={Logo6} alt="" /></a>
        </nav>
        <div className="header-photo">
        <a href="#"><img src={Avatar} alt=""/></a>
        </div>
      </header>
    )
}

export default Header;