import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import logo from "../assets/images/logos.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className={`navbar navbar-expand-lg shadow-sm fixed-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"}`}>
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top me-2" />
            
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navMenu">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link text-brown " href="#home">{t("home")}</a></li>
              <li className="nav-item"><a className="nav-link text-brown " href="#about">{t("about")}</a></li>
              <li className="nav-item"><a className="nav-link text-brown " href="#services">{t("services")}</a></li>
              <li className="nav-item"><a className="nav-link text-brown " href="#products">{t("products")}</a></li>
              <li className="nav-item"><a className="nav-link text-brown " href="#contact">{t("contact")}</a></li>
            </ul>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                <i className="bi bi-translate"></i> Langue
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item">Français</button></li>
                <li><button className="dropdown-item">English</button></li>
              </ul>
            </div>

            <button className="btn btn-outline-dark" onClick={toggleDarkMode}>
              {darkMode ? <i className="bi bi-sun text-white"></i> : <i className="bi bi-moon"></i>}
            </button>
            <a href="/login" className="btn btn-dark">{t("login")}</a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
