import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
        <span className="name">
          Inshorts clone made by -{" "}
          <a href="https://www.linkedin.com/in/tarana-shahin-463b2a1a1/" target="__blank">
            Tarana Shahin
          </a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
          <a href="https://www.instagram.com/tarana_shahin/" target="__blank">
            <i className="fab fa-instagram-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/tarana-shahin-463b2a1a1/" target="__blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="" target="__blank">
            <i className="fas fa-link fa-2x"></i>
          </a>
        </div>
      </div>
    )
}

export default Footer
