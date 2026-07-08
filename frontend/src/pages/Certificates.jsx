import { useState } from 'react';
import { Link } from 'react-router-dom';

const certificates = [
  {
    id: 'sap',
    title: 'SAP Certified Associate – Back-End Developer – ABAP Cloud',
    issuer: 'SAP',
    date: 'July 16, 2025',
    note: 'Validated expertise in SAP ABAP Cloud development, RESTful application programming, SAP BTP, and backend enterprise application development.',
    images: ['/certificates/sap.png']
  },
  {
    id: 'hpe',
    title: 'Software Engineering Job Simulation',
    issuer: 'Hewlett Packard Enterprise (HPE) / Forage',
    date: 'May 25, 2026',
    note: 'Demonstrated backend software engineering skills by building RESTful web services, implementing file upload functionality, and writing unit tests.',
    images: ['/certificates/hpe.png']
  },
  {
    id: 'jpmorgan',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. / Forage',
    date: 'May 25, 2026',
    note: 'Gained hands-on experience in enterprise software development with Kafka, H2 database integration, REST APIs, and backend application architecture.',
    images: ['/certificates/jpmorgan.png']
  },
  {
    id: 'tata',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata / Forage',
    date: 'May 23, 2026',
    note: 'Applied AI-powered data analytics techniques including exploratory data analysis, predictive modeling, business reporting, and data-driven decision making.',
    images: ['/certificates/tata-genai.png']
  },
  {
    id: 'skyscanner',
    title: 'Front-End Software Engineering Job Simulation',
    issuer: 'Skyscanner / Forage',
    date: 'May 23, 2026',
    note: 'Built a React-based web application, demonstrating proficiency in front-end development, reusable components, and modern web development practices.',
    images: ['/certificates/skyscanner.png']
  },
  {
    id: 'upgrad',
    title: 'Advanced Prompt Engineering with ChatGPT',
    issuer: 'upGrad',
    date: 'May 2, 2026',
    note: 'Demonstrated proficiency in advanced prompt engineering, effective AI interaction, and leveraging ChatGPT for automation, productivity, and problem-solving.',
    images: ['/certificates/upgrad.png']
  },
  {
    id: 'hackathon',
    title: 'Certificate of Participation – Vadodara Hackathon 6.0',
    issuer: 'Parul University (Parul Innovation & Entrepreneurship Research Centre)',
    date: 'September 2025',
    note: 'Participated in a national-level hackathon, demonstrating innovation, teamwork, creative problem-solving, and rapid solution development.',
    images: ['/certificates/hackathon.png']
  }
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [imageSources, setImageSources] = useState(
    Object.fromEntries(certificates.map((cert) => [cert.id, cert.images[0]]))
  );

  const handleImageError = (cert) => () => {
    const currentSrc = imageSources[cert.id];
    const nextSrc = cert.images.find((src) => src !== currentSrc);
    if (nextSrc) {
      setImageSources((prev) => ({ ...prev, [cert.id]: nextSrc }));
    }
  };

  const getImageSrc = (cert) => imageSources[cert.id] || cert.images[0];

  return (
    <div className="page-shell detail-shell">
      <Link className="button secondary" to="/">← Back to portfolio</Link>
      <section className="hero detail-hero">
        <p className="eyebrow">Certificates</p>
        <h1>Professional certifications and achievements</h1>
        <p className="hero-copy">These certifications highlight my expertise across backend development, cloud platforms, AI, front-end engineering, and enterprise software.</p>
      </section>

      <section className="section">
        <div className="projects-grid">
          {certificates.map((cert) => (
            <article key={cert.id} className="project-card certificate-card">
              <h3>{cert.title}</h3>
              <p className="section-copy"><strong>{cert.issuer}</strong> • {cert.date}</p>
              <div className="preview-box">
                <img src={getImageSrc(cert)} alt={cert.title} onError={handleImageError(cert)} />
              </div>
              <p className="section-copy">{cert.note}</p>
              <div className="hero-actions">
                <button className="button primary" onClick={() => setSelectedCert(cert)}>View certificate</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <h3>{selectedCert.title}</h3>
            <p className="section-copy"><strong>{selectedCert.issuer}</strong> • {selectedCert.date}</p>
            <p className="section-copy">{selectedCert.note}</p>
            <img src={getImageSrc(selectedCert)} alt={selectedCert.title} onError={handleImageError(selectedCert)} />
            <div className="hero-actions">
              <button className="button secondary modal-close" onClick={() => setSelectedCert(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
