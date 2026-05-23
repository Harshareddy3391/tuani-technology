function Home() {
  return (
    <div className="min-vh-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 text-white">
            <h1 className="display-4 fw-bold mb-4">Welcome to Tuani Technology</h1>
            <p className="lead mb-4">
              Build amazing web applications with cutting-edge technology and innovative solutions.
            </p>
            <button className="btn btn-light btn-lg me-3">Get Started</button>
            <button className="btn btn-outline-light btn-lg">Learn More</button>
          </div>
          <div className="col-lg-6">
            <div className="card bg-dark border-0 shadow-lg">
              <div className="card-body p-5 text-center">
                <div className="display-1 text-primary mb-3">🚀</div>
                <h3 className="text-white">Innovation First</h3>
                <p className="text-light">Creating solutions that matter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
