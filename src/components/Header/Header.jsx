import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav-logo">Udita</a>
            <div className="nav-menu">
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-estate nav-icon"></i> Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link">
                            <i className="uil uil-user nav-icon"></i> About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#skills" className="nav-link">
                            <i className="uil uil-file-alt nav-icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link">
                            <i className="uil uil-scenery nav-icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <i className="uil uil-message nav-icon"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header