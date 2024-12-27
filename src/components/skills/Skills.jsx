import React from 'react';
import WebDev from './WebDev';
import Design from './Design';
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Experience</span>

        <div className="skills__container container grid">
            <WebDev />
            <Design />
        </div>
    </section>
  )
}

export default Skills