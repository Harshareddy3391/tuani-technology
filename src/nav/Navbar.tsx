import { useState } from 'react'

interface NavbarProps {
  onNavClick: (page: string) => void
}

function Navbar({ onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (page: string) => {
    onNavClick(page)
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top py-3">
      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#"
          onClick={() => handleNavClick('home')}
        >
          <img
            src="/logo.png"
            alt="Tuani Technology Logo"
            height="45"
            className="me-2"
          />

          <span className="fs-4">
            <span className="text-primary">Tuani</span> Technology
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#"
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#"
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#"
                onClick={() => handleNavClick('services')}
              >
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fw-semibold"
                href="#"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>

             

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar