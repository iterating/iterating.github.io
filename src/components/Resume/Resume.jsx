import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { resumeData } from './resumeData';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> {resumeData.experienceSection.sectionTitle}
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>{resumeData.experienceSection.sectionHeading}</span>
            </h1>
          </div>

          <div className="resume-timeline">
            {resumeData.experienceSection.experiences.map((experience, index) => (
              <div className="item scroll-animation" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={experience.id} data-aos-delay={index * 100}>
                <span className="date">{experience.date}</span>
                <h2>{experience.title}</h2>
                <p>{experience.company}</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                  {experience.accomplishments.map((accomplishment, i) => (
                    <li key={i}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            ))}

            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              {resumeData.educationSection.sectionHeading}
            </h1>

            {resumeData.educationSection.educationItems.map((education, index) => (
              <div className="item scroll-animation" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={education.id}>
                <span className="date">{education.date}</span>
                <h2>{education.institution}</h2>
                <p>{education.degree}</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                  {education.accomplishments.map((accomplishment, i) => (
                    <li key={i}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* <br /> */}
            {/* <h1 className="scroll-animation" data-aos="fade-up">
              {resumeData.skillsSection.sectionHeading}
            </h1> */}

            {/* <div className="skills-container scroll-animation" data-aos="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
              {resumeData.skillsSection.skills.map((skill, index) => (
                <div 
                  key={index} 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    padding: '8px 15px', 
                    borderRadius: '20px',
                    fontSize: '0.85rem'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div> */}

            <br />
            {/* <h1 className="scroll-animation" data-aos="fade-up">
              {resumeData.projectsSection.sectionHeading}
            </h1>

            {resumeData.projectsSection.projects.map((project, index) => (
              <div className="item scroll-animation" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={project.id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
