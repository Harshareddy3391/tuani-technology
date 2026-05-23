import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Tuani Technology</span>
        </div>
      </nav>

      <main className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h1 className="card-title mb-4">Welcome to React + Vite + Bootstrap</h1>
                
                <button 
                  className="btn btn-primary btn-lg mb-4"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Count is {count}
                </button>

                <p className="card-text text-muted">
                  Edit <code className="bg-light p-1">src/App.tsx</code> and save to test HMR
                </p>

                <div className="mt-5 p-4 bg-light rounded">
                  <h5 className="mb-3">Quick Start</h5>
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item">✨ Hot Module Replacement enabled</li>
                    <li className="list-group-item">🎨 Bootstrap 5 styling ready</li>
                    <li className="list-group-item">📝 TypeScript support</li>
                    <li className="list-group-item">⚡ Lightning-fast dev server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-5 py-4 bg-dark text-white text-center">
        <p className="mb-0">&copy; 2026 Tuani Technology. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
 