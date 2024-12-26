import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">insert something here</span>
        </div>

        <div className="about__box">
          <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">so many done</span>
        </div>

        <div className="about__box">
          <i class='bx bx-message-rounded about__icon' ></i>
            <h3 className="about__title">Contact</h3>
            <span className="about__subtitle">chronically online</span>
        </div>
    </div>
  )
}

export default Info