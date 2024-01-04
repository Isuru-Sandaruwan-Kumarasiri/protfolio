import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box about__icon">
             <i class='bx bx-award'></i>
            <h3 className="about__title ">Experience</h3>
            <div className="about__subtitle">8 Years working</div>
        </div>
        <div className="about__box">
            <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <div className="about__subtitle">48 + projects</div>
        </div>
        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Supports</h3>
            <div className="about__subtitle">Online 24/7</div>
        </div>
    </div>
  )
}

export default Info