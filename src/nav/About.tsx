function About() {
  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-5 fw-bold text-center mb-4">About Tuani Technology</h1>
            <p className="lead text-center text-muted mb-5">
              Transforming ideas into digital reality since 2020
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3">Our Mission</h3>
                <p className="card-text">
                  To provide innovative and scalable technology solutions that empower businesses
                  to achieve their goals in the digital era.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3">Our Vision</h3>
                <p className="card-text">
                  To be a leading technology partner trusted by businesses worldwide for delivering
                  excellence and driving digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="display-4 text-success mb-3">100+</div>
              <h5>Projects Completed</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="display-4 text-info mb-3">50+</div>
              <h5>Happy Clients</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4">
              <div className="display-4 text-warning mb-3">15+</div>
              <h5>Team Members</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
