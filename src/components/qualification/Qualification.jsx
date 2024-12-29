import React,{ useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState]=useState(1);

    const toggleTab=(index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"}
                onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> {" "} Education
                </div>

                <div className={toggleState===2?"qualification__button qualification__active button--flex":"qualification__button button--flex"}
                onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}
            onClick={()=>toggleTab(1)}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">High School Diploma: 96%</h3>
                        <span className="qualification__subtitle">Delhi Public School, Hyderabad</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2020 - 2022
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">B.Tech CSE - AI&ML: 8.62</h3>
                        <span className="qualification__subtitle">Manipal Institute of Technology</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2022 - 2026
                        </div>
                    </div>
                </div>
            </div>

            <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}
            onClick={()=>toggleTab(2)}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">UX + AI Researcher</h3>
                        <span className="qualification__subtitle">AIxDesign</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2024 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Research Assistant</h3>
                        <span className="qualification__subtitle">MIT Manipal, Batch Reactor Lab</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2024 - Present
                        </div>
                    </div>
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">More Stuff</h3>
                        <span className="qualification__subtitle">Coming Soon</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2024 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">More Stuff</h3>
                        <span className="qualification__subtitle">Coming Soon</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> 2024 - Present
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification