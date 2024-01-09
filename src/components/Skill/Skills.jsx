import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'


function Skills() {
  return (
    <section className="Skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills