import React, { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const aboutContent = useMemo(() => (
    <div className="about-content content-width">
      <div className="section-header">
        <h4 className="subtitle scroll-animation" data-aos="fade-up">
          <i className="lar la-user"></i> About
        </h4>
      </div>
      <p className="scroll-animation" data-aos="fade-up">
        With experience spanning microservice architecture, component-driven design, and full-stack development, I bring a methodical approach to every project. 
      </p>
      <p className="scroll-animation" data-aos="fade-up">
        My technical toolkit includes TypeScript, Python, GraphQL, React, and LangChain, among many others. But beyond the technologies, I bring a unique perspective that combines analytical rigor, creative problem-solving, and a genuine passion for building tools that make a difference.
      </p>
    </div>
  ), []);

  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        {aboutContent}
      </div>
    </section>
  );
}
