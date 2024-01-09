import React from 'react'
import "./scrollup.css"

function Scrollup() {

    window.addEventListener("scroll",function(){
        const scrollUp=this.document.querySelector(".scrollup");
        if(this.scrollY>=560) scrollUp.classList.add("show-scrollup");
        else scrollUp.classList.remove("show-scrollup")
    })
  return (
    <a href="#" className="scrollup">
       <i class='uil uil-arrow-up scrollup__icon'></i> 
    </a>
  )
}

export default Scrollup