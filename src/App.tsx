import { useState } from 'react'
import Navbar from './nav/Navbar'
import Home from './nav/Home'
import About from './nav/About'
import Services from './nav/Services'
import Contact from './nav/Contact'
import Footer from './nav/Footer'
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
      <Footer onNavClick={setCurrentPage} />
    </div>
  )
}

export default App