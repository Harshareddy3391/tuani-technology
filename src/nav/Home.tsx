import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

function Home() {
  const serviceCards = [
    {
      
      subtitle: '',
      features: [""],
      image: image1,
      accentColor: '#0066ff',
    },
    {
      title: ' ',
      subtitle: ' ',
      tagline: ' ',
      features: [""],
      image: image2,
      accentColor: '#bb86fc',
    },
    {
      title: '',
      subtitle: ' ',
      features: ['Access Expert Talent', 'Reduce Costs Increase Efficiency', 'Drive Growth and Innovation', 'Focus on Core Business'],
      image: image3,
      accentColor: '#00a6ff',
    }
  ]

  return (
    <div className="min-vh-100" style={{ background: '#0a0e27', position: 'relative', overflow: 'hidden' }}>
      {/* Electric effect background */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        opacity: 0.3,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10 Q 50 30, 100 10 T 190 10\' stroke=\'%2300d4ff\' stroke-width=\'3\' fill=\'none\'/%3E%3Cpath d=\'M30 50 Q 80 80, 150 40\' stroke=\'%2300d4ff\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        pointerEvents: 'none'
      }}></div>

      <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Section */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold text-white mb-4">
              Transform Your <span style={{ color: '#0066ff' }}>Business</span>
            </h1>
            <p className="lead mb-5" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              Drive growth with our comprehensive digital solutions and expert services.
            </p>
            <button 
              className="btn btn-lg fw-bold" 
              style={{ 
                background: 'linear-gradient(135deg, #0066ff 0%, #0088ff 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 40px',
                borderRadius: '8px',
                fontSize: '1.1rem'
              }}
            >
              Start Your Project
            </button>
          </div>

          {/* Right Section - Service Cards */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-3 text-white overflow-hidden"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: `2px solid ${card.accentColor}40`,
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: `0 10px 40px ${card.accentColor}20`,
                    display: 'flex',
                    minHeight: '280px',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 25px 60px ${card.accentColor}60`;
                    e.currentTarget.style.borderColor = `${card.accentColor}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 10px 40px ${card.accentColor}20`;
                    e.currentTarget.style.borderColor = `${card.accentColor}40`;
                  }}
                >
                  {/* Dark overlay for text readability */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(10, 14, 39, 0.2), rgba(10, 14, 39, 0.8))',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}></div>

                  {/* Content Section - Overlaid on image */}
                  <div className="p-4" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Title */}
                    <h4 className="text-white fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
                      {card.title}
                    </h4>

                    {/* Subtitle */}
                    <p className="fw-bold mb-2" style={{ color: card.accentColor, fontSize: '0.85rem' }}>
                      {card.subtitle}
                    </p>

                    {/* Tagline if exists */}
                    {card.tagline && (
                      <p style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                        {card.tagline}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home