import React, { useState } from 'react'
import "./header.css"

const Header = () => {
  //change background header
  window.addEventListener("scroll",function(){
    const header=this.document.querySelector(".header");
    if(this.scrollY>=80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
})
  // Toggle Menue
  const[Toggle,showMenue]=useState(false);
  const[activeNav,setActiveNav]=useState("#home")
  return (
     <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Thilini Athukorala</a>

        <div className={Toggle ? "nav__menu show_menu":"nav__menu "}>

          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==="#about"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav==="#skills"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-briefcase-alt nav_icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-scenery nav_icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?"nav__link active_link":"nav__link "}>
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close " onClick={()=>showMenue(!Toggle)}></i>
        </div>
        <div className="nav_toggle" onClick={()=>showMenue(!Toggle)}>
          <i className="uil uil-apps "></i>
        </div>
      </nav>
     </header>
  )
}

export default Header