import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      {/* Header / Navbar */}
      {/* Updated Header / Navbar */}
<nav className="navbar">
  <div className="logo">Elementum</div>
  
  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#studio">Studio</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#faqs">FAQs</a></li>
  </ul>

  {/* Top Right Burger Menu */}
  <div className="menu-icon">＝</div>
</nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="purple-shape"></div>
        <h1>
          The <span className="highlight-underline">thinkers</span> and doers were <span className="highlight-pink">changing</span> the <span className="highlight-green">status</span> Quo with
        </h1>
        <p>
          We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Floating Avatars Cluster matching Figma */}
        <div className="avatar-cluster">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="team" className="avatar av-1" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="team" className="avatar av-2" />
          <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150" alt="team" className="avatar av-3" />
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" alt="team" className="avatar av-4" />
          <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150" alt="team" className="avatar av-5" />
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150" alt="team" className="avatar av-6" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" alt="team" className="avatar av-7" />
        </div>
      </header>

      {/* Split Section 1 (Tomorrow section) */}
      <section className="split-section">
        <div className="content-side">
          <h2><span className="highlight-underline">Tomorrow</span> should be better than <span className="highlight-green">today</span></h2>
          <p>We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.</p>
          <a href="#read" className="read-more">Read more <span>⟶</span></a>
        </div>
        <div className="image-side">
          <div className="circular-frame">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" alt="Meeting" />
          </div>
        </div>
      </section>

      {/* Split Section 2 (Progress section - Reversed) */}
      <section className="split-section reverse">
        <div className="content-side">
          <h2><span className="highlight-green">See</span> how we can help you <span className="highlight-underline">progress</span></h2>
          <p>We add a layer of fearless insights and action that allows changemakers to accelerate their progress in areas such as brand, design digital, comms and social research.</p>
          <a href="#read" className="read-more">Read more <span>⟶</span></a>
        </div>
        <div className="image-side">
          <div className="circular-frame">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" alt="Team Work" />
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="services-section">
        <h2>What we <span className="highlight-green">can offer</span> you!</h2>
        
        <div className="service-row">
          <div className="service-meta">Office of multiple interest content</div>
          <div className="service-title">Collaborative & partnership</div>
          <div className="arrow-link">⟶</div>
        </div>

        <div className="service-row">
          <div className="service-meta">The hanger US Air force digital experimental</div>
          <div className="service-title">We talk about our weight</div>
          <div className="arrow-link">⟶</div>
        </div>

        <div className="service-row">
          <div className="service-meta">Delta faucet content, social, digital</div>
          <div className="service-title">Piloting digital confidence</div>
          <div className="arrow-link">⟶</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2>Subscribe to our newsletter</h2>
        <p>To make your stay special and even more memorable</p>
        <button className="subscribe-btn">Subscribe Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#studio">Studio</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Terms & Policies</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#youtube">Youtube</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact & Address</h4>
          <p style={{fontSize: '14px', color: '#4a5568', lineHeight: '1.5'}}>
            1498w Fluton ste, STE<br/>2D Chicgo, IL 60867.<br/><br/>
            (123) 456789000<br/><br/>
            info@elementum.com
          </p>
        </div>
        <div className="footer-bottom">
          ©2026 Elementum. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;