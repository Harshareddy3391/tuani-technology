import image0 from '../assets/image0.png'
import image9 from '../assets/image9.png'
import image8 from '../assets/image8.png'

function Services() {
  const promotionalCards = [
    {
      title: 'Development',
      subtitle: ' ',
      features: [ ],
      image: image0,
      accentColor: '#0066ff',
      icon: '💼'
    },
    {
      title: 'Consulting',
      subtitle: ' ',
      tagline: ' ',
      features: [''],
      image: image9,
      accentColor: '#bb86fc',
      icon: '🤖'
    },
    {
      title: 'Outsourcing',
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

      {/* Title */}
      <h2
        className="service-title fw-bold text-center text-uppercase fs-2 fs-md-1 mb-3 text-white px-2"
        style={{
          
          lineHeight: '1.3',
          transition: 'all 0.4s ease'
        }}
      >
        {card.title}
      </h2>

      {/* Card */}
      <div
        className="service-card h-100 rounded-3 text-white overflow-hidden"
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

          /* Card Effects */
          e.currentTarget.style.transform =
            'translateY(-15px) scale(1.02)'

          e.currentTarget.style.boxShadow =
            `0 25px 60px ${card.accentColor}60`

          e.currentTarget.style.borderColor =
            `${card.accentColor}80`

          /* Title Effects */
          const title =
            e.currentTarget.parentElement?.querySelector(
              '.service-title'
            ) as HTMLElement

          if (title) {
            title.style.transform =
              'translateY(-8px) scale(1.08)'

            title.style.textShadow =
              `0 0 35px ${card.accentColor}`

            title.style.color =
              card.accentColor

            title.style.letterSpacing =
              '2px'
          }
        }}

        onMouseLeave={(e) => {

          /* Card Reset */
          e.currentTarget.style.transform =
            'translateY(0) scale(1)'

          e.currentTarget.style.boxShadow =
            `0 10px 40px ${card.accentColor}20`

          e.currentTarget.style.borderColor =
            `${card.accentColor}40`

          /* Title Reset */
          const title =
            e.currentTarget.parentElement?.querySelector(
              '.service-title'
            ) as HTMLElement

          if (title) {
            title.style.transform =
              'translateY(0) scale(1)'

            title.style.textShadow =
              `0 0 15px ${card.accentColor}`

            title.style.color =
              'white'

            title.style.letterSpacing =
              '0px'
          }
        }}
      >

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.12), rgba(0,0,0,0.02))',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        ></div>

      </div>
    </div>
  ))}
</div>
                 
                {/* Dark overlay for better text readability */}
                 
            

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
