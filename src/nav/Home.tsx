import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import Contact from './Contact'
import background from "./back.png"

function Home() {
  const serviceCards = [
    {
  title: 'SAP Solutions',
  subtitle: 'Enterprise Intelligence',
  tagline: 'Smart Digital Transformation',
  features: ["Cloud ERP", "SAP Integration", "Business Automation"],
  image: image4,
  accentColor: '#00d4ff',
},

{
  title: 'AI Innovation',
  subtitle: 'Better Business Outcomes',
  tagline: 'Powered By Artificial Intelligence',
  features: ["AI Automation", "Smart Analytics", "Modern Technology"],
  image: image5,
  accentColor: '#bb86fc',
},

{
  title: 'IT Outsourcing',
  subtitle: 'Scale Your Business',
  tagline: 'Growth Through Technology',
  features: ["24/7 Support", "Global Team", "Secure Solutions"],
  image: image6,
  accentColor: '#00ffcc',
}
  ] 

  return (
   <div
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh'
  }}
>
      {/* Navbar */}
      

      {/* Introduction Section */}
      <section id="home" className="py-5" style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
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

        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-2 fw-bold text-white mb-4">
            Transform Your <span style={{ color: '#0066ff' }}>Business</span>
          </h1>
          <p className="lead text-white mb-5" style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Drive growth with our comprehensive digital solutions and expert services.
          </p>
          <button 
            className="btn btn-lg fw-bold" 
            style={{ 
              background: 'linear-gradient(135deg, #0066ff 0%, #0088ff 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 50px',
              borderRadius: '8px',
              fontSize: '1.2rem'
            }}
          >
            Start Your Project
            <i className="bi bi-arrow-right"> ➜</i>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5" style={{ background: '#0d1230' }}>
        <div className="container">
        <h2
  className="text-center mb-5"
  style={{
    fontFamily: "'Poppins', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    lineHeight: '1.2',

    background: 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.5))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
  Our Services
</h2>
          
          <div className="row g-4">
            {serviceCards.map((card, index) => (
              <div key={index} className="col-12">
                <h2
  className="service-title text-center mb-3 px-2"
  style={{
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: '700',
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',

    color: 'white',

    letterSpacing: '3px',
    textTransform: 'uppercase',
 

    transition: 'all 0.4s ease',
    lineHeight: '1.2'
  }}
>
  {card.title}
</h2>
                <div
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
                    minHeight: '300px',
                    display: 'flex',
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
                  {/* Dark overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                   background:'linear-gradient(to top, rgba(0,0,0,0.15), rgba(0,0,0,0.02))',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}></div>

                  {/* Content */}
                   
                     
                     
                    
                    
                   
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div style={{
        background: 'transparent',
        padding: '50px 0'
      }}>
        <Contact />

      </div>

      {/* Get in Touch Section */}
      <section id="contact" className="py-5" style={{    background: 'transparent', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="lead text-white mb-5" style={{ fontSize: '1.2rem' }}>
                Ready to transform your business? Let's start a conversation.
              </p>
              
              <div className="d-flex flex-column gap-3 align-items-center mb-5">
                <a href="mailto:tuani.swain@tuanitechnology.com" className="text-white text-decoration-none" style={{ fontSize: '1.1rem' }}>
                  📧 tuani.swain@tuanitechnology.com
                </a>
                <a href="tel:+919663014160" className="text-white text-decoration-none" style={{ fontSize: '1.1rem' }}>
                  📞 +91 - 9663014160
                </a>
              </div>
              
              <button 
                className="btn btn-lg fw-bold" 
                style={{ 
                  background: 'linear-gradient(135deg, #0066ff 0%, #0088ff 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 50px',
                  borderRadius: '8px',
                  fontSize: '1.1rem'
                }}
              >
                <a
  href="../Contact.tsx"
  className="btn btn-lg fw-bold text-white text-decoration-none"
  
>
  Contact Us ➜
</a>
                
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}

export default Home