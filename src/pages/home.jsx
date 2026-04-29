
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logos.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="hero-section d-flex align-items-center min-vh-100">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center text-white"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="display-3 fw-bold mb-4"
                >
                  Bienvenue sur notre site
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="lead mx-auto mb-5"
                  style={{ maxWidth: "700px", fontSize: "1.2rem" }}
                >
                  Nous sommes ravis de vous accueillir sur notre plateforme. 
                  Decouvrez nos services de qualite concus pour repondre a vos besoins. 
                  Rejoignez notre communaute et beneficie d'une experience 
                  utilisateur exceptionnelle.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="d-flex gap-3 justify-content-center flex-wrap"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary btn-lg px-4 px-md-5 py-2 py-md-3"
                  >
                    <i className="bi bi-play-circle me-2"></i>
                    Commencer
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-light btn-lg px-4 px-md-5 py-2 py-md-3"
                  >
                    <i className="bi bi-info-circle me-2"></i>
                    En savoir plus
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}