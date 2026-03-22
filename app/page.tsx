import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 0', backgroundColor: 'var(--surface-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join Our Pet-Loving Community</h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>Get exclusive tips, early access to collections, and more. Subscribe to our newsletter.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: 1, 
                  padding: '1rem 1.5rem', 
                  borderRadius: 'var(--radius-full)', 
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }} 
              />
              <button className="btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontWeight: 600, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
            SAFFRON<span style={{ color: 'var(--primary)' }}>PAWS</span>
          </p>
          <p style={{ marginTop: '1rem', opacity: 0.6 }}>© 2026 Saffron Paws India. All tails reserved.</p>
        </div>
      </footer>
    </>
  );
}
