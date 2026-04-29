export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-black">ATR</h5>
            <p className="text-secondary small">
              Solutions innovantes pour votre entreprise.
            </p>
          </div>
          
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase text-secondary mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-secondary text-decoration-none">Accueil</a></li>
              <li><a href="/about" className="text-secondary text-decoration-none">Qui sommes-nous</a></li>
              <li><a href="/products" className="text-secondary text-decoration-none">Nos produits</a></li>
              <li><a href="mailto:contact@atr.com" className="text-secondary text-decoration-none">Mail</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase text-secondary mb-3">Contact</h6>
            <p className="text-secondary small">contact@atr.com</p>
          </div>
        </div>
        
        <hr className="border-secondary" />
        <p className="text-center text-secondary small mb-0">
          &copy; 2023 ATR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}