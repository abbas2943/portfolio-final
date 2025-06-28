import { useState } from "react";
import pagelogo from "../logo.png";
import HeaderCss from "../components-style/Header.module.css";
import Resume from "../resume/Abbas Ali Web-Dev.pdf";

function MyHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>

      {menuOpen && (
        <div className={HeaderCss.overlay} onClick={closeMenu}></div>
      )}

      <nav className="navbar">
        <div className="container-fluid">
        
          <a className="navbar-brand me-auto" href="/">
            <img src={pagelogo} alt="Page Logo" className={HeaderCss.mylogo} />
          </a>

          {/* Hamburger toggler - hidden waqti menu open asta */}
          {!menuOpen && (
            <div className={HeaderCss.togglerWrapper}>
              <button
                className={HeaderCss.toggler}
                onClick={() => setMenuOpen(true)}
              >
                ☰
              </button>
            </div>
          )}

          {/* Navigation Menu */}
          <ol
            className={`${HeaderCss.navmenu} ${
              menuOpen ? HeaderCss.menuOpen : ""
            }`}
          >
            {/* Close button balde menu mane mobile sirf */}
            <button className={HeaderCss.closeBtn} onClick={closeMenu}>
              ×
            </button>

            <li>
              <a className="nav-link" href="#About" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Work" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Experience" onClick={closeMenu}>
                Work
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Contact" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ol>

          {/* Resume Button */}
          <div>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className={HeaderCss.resumebtn}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyHeader;
