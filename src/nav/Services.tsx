import image0 from '../assets/image0.png'
import image9 from '../assets/image9.png'
import image8 from '../assets/image8.png'

function Services() {
  const promotionalCards = [
    {
      title: '',
      subtitle: ' ',
      features: [ ],
      image: image0,
      accentColor: '#0066ff',
      icon: '💼'
    },
    {
      title: ' ',
      subtitle: ' ',
      tagline: ' ',
      features: [''],
      image: image9,
      accentColor: '#bb86fc',
      icon: '🤖'
    },
    {
      title: ' ',
      subtitle: ' ',
      features: [''],
      image: image8,
      accentColor: '#00d4ff',
      icon: '🌍'
    }
  ]

  return (
    <div className="min-vh-100" style={{ background: '#0a0e27', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 20% 50%, #00d4ff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #ff1744 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <div className="row mb-5 py-5">
          <div className="col-lg-12 text-center">
            <h1 className="display-3 fw-bold text-white mb-4">
              Provide Awesome Customer Services
            </h1>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4 mb-5">
          {promotionalCards.map((card, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div 
                className="h-100 rounded-3 text-white overflow-hidden" 
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
                  flexDirection: 'column',
                  minHeight: '450px',
                  justifyContent: 'flex-end'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 25px 60px ${card.accentColor}60`;
                  e.currentTarget.style.borderColor = `${card.accentColor}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 10px 40px ${card.accentColor}20`;
                  e.currentTarget.style.borderColor = `${card.accentColor}40`;
                }}
              >
                {/* Dark overlay for better text readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(10, 14, 39, 0.2), rgba(10, 14, 39, 0.85))',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}></div>

                {/* Content Section - Overlaid on image */}
                <div className="p-4" style={{ position: 'relative', zIndex: 2 }}>
                  {/* Title */}
                  <h3 className="fw-bold mb-2" style={{ fontSize: '1.3rem' }}>
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="fw-bold mb-3" style={{ color: card.accentColor, fontSize: '0.9rem' }}>
                    {card.subtitle}
                  </p>

                  {/* Tagline if exists */}
                  {card.tagline && (
                    <p className="mb-3" style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                      {card.tagline}
                    </p>
                  )}

                  {/* Features */}
                  <div className="d-flex flex-column gap-2 mb-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2">
                        <div 
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: card.accentColor,
                            marginTop: '6px',
                            flexShrink: 0
                          }}
                        ></div>
                        <span style={{ fontSize: '0.85rem' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Website */}
                  <div 
                    style={{
                      paddingTop: '12px',
                      borderTop: `1px solid ${card.accentColor}40`,
                      fontSize: '0.8rem'
                    }}
                  >
                    <span>www.tuani </span>
                    <span style={{ color: card.accentColor, fontWeight: 'bold' }}>technology.com</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Services
