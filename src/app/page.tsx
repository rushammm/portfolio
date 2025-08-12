// ...existing code...
"use client";
import React, { useState } from 'react';
// ...existing code...
import './globals.css';
import './portfolio-styles.css';

// Font imports (Google Fonts)
// Climate Crisis: https://fonts.google.com/specimen/Climate+Crisis
// Inter: https://fonts.googleapis.com/css?family=Inter:wght@400;500;900&display=swap

// Add font imports directly in the <head> for Next.js

const sections = [
  { id: 'about', label: 'A b o u t' },
  { id: 'projects', label: 'P r o j e c t s' },
  { id: 'experience', label: 'E x p e r i e n c e' },
  { id: 'education', label: 'E d u c a t i o n' },
  { id: 'contact', label: 'C o n t a c t' },
];

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);
  // Static position for resume button (right side of heading, moved a bit down)
  const resumePos = { top: '70%', left: '80%' };
  const [headerOpacity, setHeaderOpacity] = useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      // Fade out header between 0 and 200px scroll
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 200;
      let opacity = 1;
      if (scrollY > fadeStart) {
        opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
      setHeaderOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
           <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* Header / Navigation */}
        <header className="header" style={{ opacity: headerOpacity, transition: 'opacity 0.5s' }}>
          <nav className="nav">
            {/* Removed logo from top left */}
            <ul className="nav-list">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </ul>
            <button
              className="mode-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                // Improved monochrome moon icon
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="14" r="8" fill="currentColor" />
                  <circle cx="12" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                // Monochrome sun icon
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="6" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="2">
                    <line x1="14" y1="3" x2="14" y2="7" />
                    <line x1="14" y1="21" x2="14" y2="25" />
                    <line x1="3" y1="14" x2="7" y2="14" />
                    <line x1="21" y1="14" x2="25" y2="14" />
                    <line x1="6.22" y1="6.22" x2="9.04" y2="9.04" />
                    <line x1="18.96" y1="18.96" x2="21.78" y2="21.78" />
                    <line x1="6.22" y1="21.78" x2="9.04" y2="18.96" />
                    <line x1="18.96" y1="9.04" x2="21.78" y2="6.22" />
                  </g>
                </svg>
              )}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Hi, I&apos;m Rusham</h1>
          <p className="hero-subtitle">Developer & Researcher</p>
          <a
            href="/resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'absolute', ...resumePos, transform: 'translate(-50%, -50%)', zIndex: 2 }}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="resume-btn"
            style={{ position: 'absolute', top: '30%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 2, fontSize: '1.5rem', fontWeight: 300 }}
          >
            Hire <br />
            me
          </a>
        </section>

        {/* Main Sections */}
        <main className="main-content">
          <section id="about" className="section card">
            <h2>About</h2>
            <p className="about-text">I’m a creative soul who loves bringing ideas to life, turning concepts into visuals and visions into real experiences. Whether it’s designing, coding, or sprinkling in some storytelling, I’m all about making things that not only look great but feel right. Currently looking for exciting opportunities to put my skills to work and create something amazing.</p>
          </section>
          <section id="projects" className="section card">
            <h2>Projects</h2>
            <div className="project-list">
              <div className="project-item">
                <a href="https://poi-next-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-title">LocatePro</a>
                <div className="project-tech">Next.js, PostgreSQL, Google Earth Engine, Python, QGIS</div>
                <div className="project-desc">A geospatial platform for location intelligence and analysis.</div>
              </div>
              <div className="project-item">
                <span className="project-title">Placify – Internship Management Platform</span>
                <div className="project-tech">T3 Stack (Next.js, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL)</div>
                <div className="project-desc">A platform to manage internships, built for scalability and ease of use.</div>
              </div>
            </div>
          </section>
          <section id="publications" className="section card">
            <h2>Publications</h2>
            <div className="publication-list">
              <div className="publication-item">
                <span className="publication-title">
                  <a href="https://arxiv.org/abs/2409.14194" target="_blank" rel="noopener noreferrer" className="publication-link">Data-Driven Approach to assess and identify gaps in health care setup in South Asia</a>
                </span>
                <div className="publication-meta">ICONIP24, 2024</div>
                <div className="publication-desc">Identified underserved communities through in-depth research and designed targeted strategies to advance healthcare equity.
Leveraged data-driven insights to inform and promote initiatives for achieving universal health coverage.</div>
              </div>
              {/* Add more publication-item blocks as needed */}
            </div>
          </section>
          <section id="experience" className="section card">
            <h2>Experience</h2>
            <div className="experience-list">
              <div className="experience-item">
                <span className="experience-title">SCIT CAIR, Lahore, Pakistan</span>
                <div className="experience-meta">AI Researcher &mdash; Jan 2024 - Present</div>
                <ul className="experience-desc">
                  <li>Analyzed flood impact over 442,000 km² in Punjab and Sindh using satellite imagery and Google Earth Engine.</li>
                  <li>Applied CNN and template matching to detect flood-affected schools and hospitals with high spatial accuracy.</li>
                  <li>Performed intersection analysis using QGIS to identify infrastructure within flood-impacted zones.</li>
                  <li>Supported disaster response planning through data-driven geospatial insights.</li>
                </ul>
              </div>
              <div className="experience-item">
                <span className="experience-title">Systems Limited, Lahore, Pakistan</span>
                <div className="experience-meta">Artificial Intelligence Intern &mdash; Sep 2024 - Oct 2024</div>
                <ul className="experience-desc">
                  <li>Received hands-on training in implementing single-layer neural networks using TensorFlow.</li>
                  <li>Gained experience in building multi-layer neural networks under the guidance of the AI team.</li>
                </ul>
              </div>
              <div className="experience-item">
                <span className="experience-title">Corbis Soft, Lahore, Pakistan</span>
                <div className="experience-meta">Software Development Intern &mdash; Jun 2024 - Aug 2024</div>
                <ul className="experience-desc">
                  <li>Tested APIs using Postman, identifying redundant calls and optimizing response times, improving performance by over 5%.</li>
                  <li>Assisted in backend development and basic database tasks.</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="education" className="section card">
            <h2>Education</h2>
            <div className="education-list">
              <div className="education-item">
                <span className="education-title">Beaconhouse National University, Lahore, Pakistan</span>
                <div className="education-meta">BSc Computer Science &mdash; Sep 2021 - Jun 2025</div>
              </div>
              <div className="education-item">
                <span className="education-title">Roots Millennium Schools, Gujranwala, Pakistan</span>
                <div className="education-meta">O-Levels &amp; A-Levels &mdash; Aug 2018 - Jun 2020</div>
              </div>
            </div>
          </section>
          <section id="contact" className="section card">
            <h2>Contact</h2>
            <div className="contact-list">
              <a href="mailto:elahirusham@gmail.com" className="contact-link" aria-label="Email">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '0.5rem'}}>
                  <rect width="28" height="28" rx="6" fill="var(--color-orange)"/>
                  <path d="M7 9l7 6 7-6" stroke="#fff" strokeWidth="2" fill="none"/>
                  <rect x="7" y="9" width="14" height="10" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
                elahirusham@gmail.com
              </a>
              <a href="https://github.com/rushamelahi" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle', marginRight: '0.5rem'}} xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="6" fill="var(--color-orange)"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="#fff"/>
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/rushamelahi" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{verticalAlign: 'middle', marginRight: '0.5rem'}} xmlns="http://www.w3.org/2000/svg">
                  <rect width="28" height="28" rx="6" fill="var(--color-orange)"/>
                  <path d="M12.36 13.33h2.67v1.36c.37-.7 1.32-1.36 2.44-1.36 2.61 0 3.09 1.72 3.09 3.96v4.04h-2.67v-3.59c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.94-1.38 1.91v3.65h-2.67v-7.00zm-4.36 0h2.67v7h-2.67v-7zm1.33-3.5c.86 0 1.56.7 1.56 1.56 0 .86-.7 1.56-1.56 1.56-.86 0-1.56-.7-1.56-1.56 0-.86.7-1.56 1.56-1.56z" fill="#fff"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Hire me .</span>
        </footer>

        {/* ...existing code... */}
      </div>
    </React.Fragment>
  );
}
