function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Beautiful and responsive designs that engage your users and represent your brand.'
    },
    {
      icon: '⚙️',
      title: 'Web Development',
      description: 'Robust and scalable web applications built with modern technologies and best practices.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Secure and reliable cloud infrastructure and deployment solutions.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Comprehensive security solutions to protect your data and applications.'
    },
    {
      icon: '📊',
      title: 'Analytics',
      description: 'Data-driven insights and analytics to optimize your business performance.'
    }
  ]

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-5 fw-bold mb-4">Our Services</h1>
            <p className="lead text-muted">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow" style={{ transition: 'all 0.3s' }}>
                <div className="card-body text-center">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn-primary btn-sm w-100">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
