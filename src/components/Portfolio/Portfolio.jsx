import React, { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { config } from "../../config"
import { portfolioData } from "./portfolioData"
import Lightbox from "lightbox2"
import "lightbox2/dist/css/lightbox.min.css"
import "lightbox2/dist/js/lightbox.js"

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    })
  }, [])
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i>{" "}
              {portfolioData.sectionTitle}
            </h4>
            <h1 className="scroll-animation">
              {portfolioData.sectionHeading}{" "}
              <span>{portfolioData.sectionHeadingSpan}</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {portfolioData.projects.map((project) => (
              <div
              key={project.id}
                className="col-md-12 scroll-animation"
                data-aos={project.animation}
              >
                <div className={`portfolio-item ${project.type}`}>
                  <div className="portfolio-item-inner">
                    {Array.isArray(project.link) ? (
                      // If link is an array, create multiple lightbox links
                      <>
                        {/* First image is visible */}
                        <a href={config.getAssetPath(project.link[0])} data-lightbox={`gallery-${project.id}`}>
                          <img
                            src={config.getAssetPath(
                              typeof project.image === "string"
                                ? project.image
                                : project.image.src
                            )}
                            style={
                              typeof project.image === "string"
                                ? {}
                                : { height: project.image.height }
                            }
                            alt={project.title}
                            loading="lazy"
                          />
                        </a>
                        {/* Hidden links for additional gallery images */}
                        {project.link.slice(1).map((link, index) => (
                          <a 
                            key={index}
                            href={config.getAssetPath(link)} 
                            data-lightbox={`gallery-${project.id}`}
                            style={{ display: 'none' }}
                            loading="lazy"
                          ></a>
                        ))}
                      </>
                    ) : (
                      // Regular single image lightbox
                      <a href={project.link} data-lightbox="example-1">
                        <img
                          src={config.getAssetPath(
                            typeof project.image === "string"
                              ? project.image
                              : project.image.src
                          )}
                          style={
                            typeof project.image === "string"
                              ? {}
                              : { height: project.image.height }
                          }
                          alt={project.title}
                          loading="lazy"
                        />
                      </a>
                    )}
                    <ul className="portfolio-categories">
                      {project.categories.map((category, index) => (
                        <li key={index}>
                          <a disabled>{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>
                    <a href={project.liveUrl}>{project.title}</a>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
