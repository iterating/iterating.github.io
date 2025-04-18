import React, { useEffect, useState, useMemo, useCallback } from "react"
import { config } from "../../config"
import { portfolioData } from "./portfolioData"
import Lightbox from "lightbox2"
import "lightbox2/dist/css/lightbox.min.css"
import "lightbox2/dist/js/lightbox.js"

export default function Portfolio() {
  // Initialize only Lightbox when component mounts (AOS is handled at the app level)
  useEffect(() => {
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    })
  }, [])

  // Memoize the gallery link creation to improve performance
  const renderGalleryLinks = useCallback((project) => {
    if (!Array.isArray(project.link)) return null

    return project.link
      .slice(1)
      .map((link, index) => (
        <a
          key={`gallery-link-${project.id}-${index}`}
          href={config.getAssetPath(link)}
          data-lightbox={`gallery-${project.id}`}
          style={{ display: "none" }}
          loading="lazy"
        ></a>
      ))
  }, [])

  // Memoize project items to prevent unnecessary re-renders
  const projectItems = useMemo(() => {
    return portfolioData.projects.map((project, index) => (
      <div
        className="col-md-12 scroll-animation"
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={index * 100}
        key={`project-${project.id}`}
      >
        <div className={`portfolio-item ${project.type}`}>
          <div className="portfolio-item-inner">
            {Array.isArray(project.link) ? (
              // If link is an array, create multiple lightbox links
              <>
                {/* First image is visible */}
                <a
                  href={config.getAssetPath(project.link[0])}
                  data-lightbox={`gallery-${project.id}`}
                >
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
                {renderGalleryLinks(project)}
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
                <li key={`category-${index}`}>
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
    ))
  }, [portfolioData.projects, renderGalleryLinks])

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

          <div className="row portfolio-items">{projectItems}</div>
        </div>
      </div>
    </section>
  )
}
