import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { config } from '../../config';
import { portfolioData } from '../../data/portfolioData';
// import Lightbox from 'lightbox2';
// import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Lightbox.option({
    //   resizeDuration: 200,
    //   fadeDuration: 600,
    //   imageFadeDuration: 600,
    //   wrapAround: true,
    // });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> {portfolioData.sectionTitle}
            </h4>
            <h1 className="scroll-animation">
              {portfolioData.sectionHeading} <span>{portfolioData.sectionHeadingSpan}</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {portfolioData.projects.map((project) => (
              <div className="col-md-12 scroll-animation" data-aos={project.animation} key={project.id}>
                <div className={`portfolio-item ${project.type}`}>
                  <div className="portfolio-item-inner">
                    <a href={project.link} data-lightbox="example-1">
                      <img
                        src={config.getAssetPath(project.image)}
                        alt={project.title}
                        loading="lazy"
                      />
                    </a>

                    <ul className="portfolio-categories">
                      {project.categories.map((category, index) => (
                        <li key={index}>
                          <a disabled>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>
                    <a href={project.link}>
                      {project.title}
                    </a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
