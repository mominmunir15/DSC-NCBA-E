import Navbar from '../components/Navbar.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Navbar />
        <HeroCarousel />
      </header>

      <section className="about-section">
        <div className="about-content">
          <span className="about-label">ABOUT US</span>
          <h2>About DSC NCBAE</h2>
          <p>Developer Student Clubs (DSC) at NCBAE is a premier, student-led tech community driven by innovation and continuous learning. Our mission is to bridge the gap between academic theory and real-world application by hosting interactive coding workshops, competitive hackathons, and cutting-edge tech seminars. Whether you are a beginner writing your first line of code or an advanced developer building scalable applications, DSC NCBAE is your platform to learn, connect, and grow alongside industry leaders.</p>
          <button className="btn-view-more" type="button">View More ⚡</button>
        </div>
        <div className="about-image">
          <img src="/assets/images/about/about-image.jpeg" alt="About DSC NCBAE" className="main-about-img" />
          <div className="circular-badge">
            <img src="/assets/images/brand/dsc-logo.png" alt="DSC Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
          </div>
        </div>
      </section>

      <section className="experts-section" id="team">
        <div className="section-header">
          <span className="section-subtitle">OUR TEAM</span>
          <h2>🔥 Our DSC Experts 🔥</h2>
          <p className="subtitle-small">Highly Skilled Professionals</p>
        </div>
        <div className="experts-grid">
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-1.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Abdul Raheem" />
            <div className="expert-badge blue-badge">Abdul Raheem 🔥</div>
          </div>
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-2.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Raveem Saeed" />
            <div className="expert-badge blue-badge">Raveem Saeed 🔥</div>
          </div>
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-3.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Momin Munir" />
            <div className="expert-badge blue-badge">Momin Munir 🔥</div>
            <div style={{ position: 'absolute', bottom: '-40px', left: '30px', fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>Lead Internal Affairs</div>
          </div>
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-4.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '15px' }} alt="Zainab Batool" />
            <div className="expert-badge blue-badge">Zainab Batool 🔥</div>
          </div>
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-5.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Subhan Abad" />
            <div className="expert-badge blue-badge">Subhan Abad 🔥</div>
          </div>
          <div className="expert-card red-card">
            <img src="/assets/images/team/expert-6.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '15px' }} alt="Salman Aslam" />
            <div className="expert-badge blue-badge">Salman Aslam 🔥</div>
          </div>
        </div>
      </section>

      <section className="faculty-section">
        <div className="section-header">
          <span className="section-subtitle">OUR FACULTY ADVISORS</span>
          <h2>💡 Our Faculty Advisors 💡</h2>
        </div>
        <div className="faculty-grid">
          <div className="faculty-card yellow-card">
            <img src="/assets/images/faculty/fac-1.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Dr Naila Naz" />
            <div className="faculty-badge green-badge">Dr Naila Naz 🛡️</div>
          </div>
          <div className="faculty-card yellow-card">
            <div className="faculty-badge green-badge">Ma&apos;am Iram Saba 🛡️</div>
          </div>
          <div className="faculty-card yellow-card">
            <img src="/assets/images/faculty/fac-3.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} alt="Prof. Abdul Wahid" />
            <div className="faculty-badge green-badge">Prof. Abdul Wahid 🛡️</div>
          </div>
          <div className="faculty-card yellow-card">
            <img src="/assets/images/faculty/fac-4.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '15px' }} alt="Ma'am Aina Batool" />
            <div className="faculty-badge green-badge">Ma&apos;am Aina Batool 🛡️</div>
          </div>
          <div className="faculty-card yellow-card">
            <div className="faculty-badge green-badge">Ma&apos;am Arfa 🛡️</div>
          </div>
          <div className="faculty-card white-card text-card">
            <h3>Learn<br />Connect<br />Grow</h3>
          </div>
        </div>
      </section>

      <section className="collaborators-section">
        <div className="section-header">
          <span className="section-subtitle">Our Collaborators</span>
          <h2>Our Highly Esteemed<br />Collaborators</h2>
        </div>
        <div className="collaborators-grid">
          <div className="collab-card"><img src="/assets/images/collaborators/collab-1.jpg" alt="Collaborator 1" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-2.jpg" alt="Collaborator 2" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-3.jpg" alt="Collaborator 3" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-4.jpg" alt="Collaborator 4" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-1.jpg" alt="Collaborator 1" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-2.jpg" alt="Collaborator 2" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-3.jpg" alt="Collaborator 3" /></div>
          <div className="collab-card"><img src="/assets/images/collaborators/collab-4.jpg" alt="Collaborator 4" /></div>
        </div>
      </section>

      <section className="what-we-do-section" id="mission">
        <div className="section-header">
          <span className="section-subtitle">Our Mission</span>
          <h2>What We do</h2>
        </div>
        <div className="polaroid-stack">
          <div className="polaroid p1">
            <div className="polaroid-image"></div>
            <p>Mission 1</p>
          </div>
          <div className="polaroid p2">
            <div className="polaroid-image"></div>
            <p>Mission 2</p>
          </div>
          <div className="polaroid p3">
            <div className="polaroid-image"></div>
            <p>Mission 3</p>
          </div>
          <div className="polaroid p4">
            <div className="polaroid-image"></div>
            <p>Mission 4</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
