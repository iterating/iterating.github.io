import React, { useEffect, useMemo } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { config } from '../../config'
import { skillsData } from './skillsData'

export default function Skills() {
    // Initialize AOS only once when component mounts
    useEffect(() => {
        AOS.init({duration:1000})
    }, [])
  
    // Memoize the skill items to prevent unnecessary re-renders
    const skillItems = useMemo(() => {
        return skillsData.map((skill, index) => (
            <div key={`skill-${skill.name}`} className="col-md-3 scroll-animation" data-aos={skill.animation}>
                <div className="skill">
                    <div className="skill-inner">
                        <i className={`${skill.icon} skill-icon`}></i>
                    </div>
                    <p className="name">{skill.name}</p>
                </div>
            </div>
        ));
    }, [skillsData]);
  
    return (
        <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Stack</span></h1>
                    </div>

                    <div className="row skills text-center">
                        {skillItems}
                    </div>    
                </div>
            </div>
        </section>
    )
}
