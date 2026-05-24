interface FooterProps {
  onNavClick: (page: string) => void
}

function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <img src="/logo.png" alt="Tuani Technology Logo" height="40" className="mb-2" />
              <h5 className="fw-bold mt-3">
                <span className="text-primary">TUANI</span> Technology
              </h5>
            </div>
            <p className="text-white small">
                    
              Tuani Technologies is a leading technology integrator specializing in helping clients
              reimagine operating models, enhance competitiveness, optimize costs, foster exceptional
              stakeholder experiences and drive business transformation.
              
            </p>
          </div>

          {/* Services */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none hover-link">
                  Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none hover-link">
                  Consulting
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none hover-link">
                  Outsourcing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none hover-link">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-4">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick('home')
                  }}
                  className="text-white text-decoration-none hover-link"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick('about')
                  }}
                  className="text-white text-decoration-none hover-link"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick('services')
                  }}
                  className="text-white text-decoration-none hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavClick('contact')
                  }}
                  className="text-white text-decoration-none hover-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-white small mb-0">
              &copy; 2026 Tuani Technology. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-white small mb-0">
              Built with React + Vite + Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
