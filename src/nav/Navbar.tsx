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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#" onClick={() => handleNavClick('home')}>
          <img src="/logo.png" alt="Tuani Technology Logo" height="40" className="me-2" />
          <span><span className="text-primary">Tuani</span> Technology</span>
        </a>
        <button
          className="navbar-toggler"
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
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleNavClick('services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
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
