import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import Certificates from './pages/Certificates';

const projects = [
  {
    title: 'BHAVNA',
    description: 'Behavioral & Human Analysis for Virtual Networking Assessment, focused on understanding interaction patterns in digital environments.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'face-api.js', 'WebSpeech', 'Gemini-2.5-Flash'],
    slug: 'bhavna'
  },
  {
    title: 'Dhristi',
    description: 'An AI-powered real-time sign language translator designed to improve communication accessibility.',
    stack: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    slug: 'dhristi'
  },
  {
    title: 'AI-Powered Deepfake Detection',
    description: 'A security-minded solution for identifying synthetic media and supporting trusted digital content.',
    stack: ['Python', 'TensorFlow', 'Computer Vision'],
    slug: 'deepfake'
  },
  {
    title: 'Gesture Controlled Mouse',
    description: 'An interactive desktop experience that translates hand gestures into cursor movement and input.',
    stack: ['OpenCV', 'Python', 'Human-Computer Interaction'],
    slug: 'gesture'
  }
];

const skillGroups = [
  {
    title: 'Core Stack',
    items: ['Python', 'JavaScript', 'SAP ABAP', 'REST APIs', 'Git/GitHub']
  },
  {
    title: 'Web & Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Scalable Web Apps']
  },
  {
    title: 'Strengths',
    items: ['Backend Development', 'Problem Solving', 'Modern Development Workflows', 'Collaborative Delivery']
  }
];

function HomePage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [theme, setTheme] = useState('dark');
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Added the missing state tracker for the custom embedded phone overlay card
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    setIsLoaded(true);
    
    if (!document.getElementById('remixicon-cdn')) {
      const link = document.createElement('link');
      link.id = 'remixicon-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css';
      document.head.appendChild(link);
    }
  }, [theme]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending your message...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('Thanks for reaching out. I will reply shortly.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('There was a problem sending the message. Please try again.');
      }
    } catch (error) {
      setStatus('Unable to reach the server right now.');
    }
  };

  return (
    <div className={`page-shell ${isLoaded ? 'fade-in' : ''}`}>
      <header className="hero">
        <nav className="nav-bar">
          <div className="brand brand-large">Rudra Pratap Singh</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Software Developer • Full Stack Web Developer</p>
            <h1>Building thoughtful software that turns complex ideas into dependable products.</h1>
            <p className="hero-copy">
              I’m an aspiring software developer with hands-on experience in backend development, REST APIs,
              and scalable web applications. I enjoy creating practical solutions that combine clean code,
              strong architecture, and a sharp product mindset.
            </p>

            <div className="hero-social-links">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rudrasingh0094@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                title="Email Address"
                >
                <i className="ri-mail-line"></i>
              </a>
              <a href="https://github.com/Rudra-Singh18" target="_blank" rel="noreferrer" title="GitHub Profile">
                <i className="ri-github-fill"></i>
              </a>
              <a href="https://www.linkedin.com/in/rudra-singh-708872364" target="_blank" rel="noreferrer" title="LinkedIn Profile">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              
              {/* Wrapped in a relative layout node container for local alignment positioning */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <a 
                  href="#phone" 
                  title="Phone Number"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPhonePopup(!showPhonePopup);
                  }}
                >
                  <i className="ri-phone-line"></i>
                </a>

                {/* Inline custom relative popup window template design card */}
                {showPhonePopup && (
                  <div className="custom-phone-popup">
                    <p>📞 +91 8544692914</p>
                    <button type="button" onClick={() => setShowPhonePopup(false)}>Close</button>
                  </div>
                )}
              </div>

              <a href="https://www.instagram.com/rudra_singh.18?igsh=Ynl1aTd0aWJ1eG13" target="_blank" rel="noreferrer" title="Instagram Profile">
                <i className="ri-instagram-line"></i>
              </a>
            </div>

            <div className="hero-actions">
              <a className="button primary" href="#work">See projects</a>
              <Link className="button secondary" to="/certificates">View Credentials</Link>
              <a className="button secondary" href="/Rudra_Pratap_Singh_Resume.pdf" download>Download Resume</a>
            </div>  
          </div>

          <div className="hero-card profile-card">
            <img
              src="/profile.jpg"
              alt="Rudra Pratap Singh"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = '/profile-photo.svg';
              }}
            />
            <p className="card-label">Focus areas</p>
            <ul>
              <li>Backend systems and APIs</li>
              <li>Full-stack web development</li>
              <li>AI-driven and interactive products</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Crafting reliable, modern software with a clear sense of purpose.</h2>
          </div>
          <p className="section-copy">
            I bring a strong foundation in Python, JavaScript, SAP ABAP, and Git/GitHub into every project I work on.
            My interest lies in building software that is both technically solid and genuinely useful — from backend services
            to intelligent applications that solve real-world problems.
          </p>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="panel">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects shaped by curiosity, technical depth, and practical impact.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link key={project.title} className="project-card project-link" to={`/projects/${project.slug}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-heading">
            <p className="eyebrow">Certifications</p>
            <h2>Professional credentials validating my software engineering expertise.</h2>
          </div>
          <p className="section-copy">
            7+ certifications in backend engineering, full stack development, data analytics, AI, and SAP ABAP Cloud.
            Each credential demonstrates a specific set of practical skills and industry-ready problem solving.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/certificates">View certificates</Link>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something useful and lasting.</h2>
          </div>
          <div className="contact-stack">
            <div className="contact-links">
              <a href="mailto:rudrasingh0094@gmail.com">rudrasingh0094@gmail.com</a>
              <a href="https://www.linkedin.com/in/rudra-singh-708872364" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Rudra-Singh18" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" required />
              <input name="email" type="email" value={formState.email} onChange={handleChange} placeholder="Your email" required />
              <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Tell me about your project" rows="5" required />
              <button className="button primary" type="submit">Send inquiry</button>
              <p className="form-status">{status}</p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

// Keep the App router declaration block completely clean at the base 
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/certificates" element={<Certificates />} />
    </Routes>
  );
}

export default App;