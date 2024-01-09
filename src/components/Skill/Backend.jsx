import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bxl-nodejs'></i>
                    <div>
                       <h3 className="skills__name">node.js</h3>
                       <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-java'></i>
                    <div>
                       <h3 className="skills__name">Java</h3>
                       <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bxl-python'></i>
                    <div>
                       <h3 className="skills__name">Python</h3>
                       <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class='bx bxl-mongodb'></i>
                    <div>
                       <h3 className="skills__name">MongoDB</h3>
                       <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend