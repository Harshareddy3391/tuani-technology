import { useState } from 'react'
import Navbar from './nav/Navbar'
import Home from './nav/Home'
import About from './nav/About'
import Services from './nav/Services'
import Contact from './nav/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar onNavClick={setCurrentPage} />
      <main className="flex-grow-1">
        {renderPage()}
      </main>
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">&copy; 2026 Tuani Technology. All rights reserved.</p>
          <p className="small text-muted">Built with React + Vite + Bootstrap</p>
        </div>
      </footer>
    </div>
  )
}

export default App