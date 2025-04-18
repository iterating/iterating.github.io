import React from "react"
import { config } from "../../config"
import { personalData } from "../About/personalData"

export default function LSidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h3>{personalData.name}</h3>
        <span className="designation">{personalData.designation}</span>
      </div>
      <img
        className="me"
        src={personalData.profileImage}
        alt={personalData.name}
        loading="lazy"
      />
      <h2 className="email">{personalData.email}</h2>
      <h2 className="address">{personalData.address}</h2>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {personalData.socialProfiles.map((profile, index) => (
          <li key={index}>
            <a href={profile.url}>
              <i className={profile.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${personalData.email}`}
        className="theme-btn"
        style={{ marginBottom: "5px" }}
      >
        <i className="las la-envelope"></i> Email me
      </a>
      <br />
      <a
        href={config.getAssetPath(personalData.resumeFile)}
        className="theme-btn"
        style={{ marginBottom: "5px" }}
      >
        <i className="las la-paper-plane"></i> Resume
      </a>
      <p className="copyright">
        &copy; {new Date().getFullYear()} {personalData.name}.
      </p>
    </div>
  )
}
