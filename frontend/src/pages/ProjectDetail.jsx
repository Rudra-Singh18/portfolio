import { Link, useParams } from 'react-router-dom';

const projectDetails = {
  bhavna: {
    title: 'BHAVNA',
    summary: 'Behavioral & Human Analysis for Virtual Networking Assessment.',
    description: 'BHAVNA is an innovative, edge-optimized mock interview platform built on React, Vite, and TailwindCSS that conducts real-time behavioral and linguistic analysis directly inside the browser. By combining computer vision through face-api.js to track eye contact and facial expressions with auditory telemetry via the native Web Speech API to monitor speech pacing and silent pauses, the application aggregates live behavioral metrics. These raw telemetry vectors are securely routed to Google’s Gemini-2.5-Flash engine, which instantly processes the performance logs and renders a highly formatted, presentation-grade executive career diagnostic report to the user without requiring any expensive backend server infrastructure.',
    screenshot: ['/projects/homepage.png'],
    website: 'https://bhavna-behavioral-human-analysis-fo-six.vercel.app/',
    repo: 'https://github.com/Rudra-Singh18/BHAVNA-Behavioral-Human-Analysis-for-Virtual-Networking-Assessment.git',
    stack: ['React', 'Vite', 'Tailwind CSS', 'face-api.js', 'WebSpeech', 'Gemini-2.5-Flash']
  },
  dhristi: {
    title: 'Dhristi',
    summary: 'AI-powered real-time sign language translator.',
    description: 'Dhristi AI is an AI-powered real-time Sign Language Translator designed to bridge the communication gap between hearing-impaired individuals and non-sign language users. The system uses computer vision and deep learning to detect hand gestures through a webcam, recognize sign language alphabets in real time, and convert them into readable text. Built with Python, Flask, OpenCV, TensorFlow, and MediaPipe, the application features a modern responsive interface, live gesture detection, and an intuitive user experience. Dhristi AI demonstrates the practical application of artificial intelligence, machine learning, and computer vision to improve accessibility and promote inclusive communication.',
    screenshot: ['/projects/dhristi_homepage.png'],
    website: '',
    repo: 'https://github.com/Rudra-Singh18/AI-Sign-Language-Translator.git',
    stack: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'MediaPipe', 'Computer Vision']
  },
  deepfake: {
    title: 'AI-Powered Deepfake Detection',
    summary: 'Security-minded detection of synthetic media.',
    description: 'A deep learning-based system designed to identify manipulated media and support trust in digital content.',
    screenshot: ['/projects/deepfake_preview.png'],
    website: '',
    repo: 'https://github.com/Rudra-Singh18/Deepfake-Detection.git',
    stack: ['Python', 'TensorFlow', 'Computer Vision']
  },
  gesture: {
    title: 'Gesture Controlled Mouse',
    summary: 'Interactive cursor control through hand gestures.',
    description: 'A human-computer interaction prototype that turns hand movements into cursor input for more natural device control.',
    screenshot: '/certificates/placeholder.png',
    website: '',
    repo: 'https://github.com/Rudra-Singh18/gesture-controlled-mouse.git',
    stack: ['OpenCV', 'Python', 'HCI']
  }
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="page-shell detail-shell">
        <Link className="button secondary" to="/">Back to portfolio</Link>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="page-shell detail-shell">
      <Link className="button secondary" to="/">← Back to portfolio</Link>
      <section className="hero detail-hero">
        <p className="eyebrow">Project detail</p>
        <h1>{project.title}</h1>
        <p className="hero-copy">{project.summary}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>
      </section>

      <section className="section detail-grid">
        <div className="panel">
          <h3>Overview</h3>
          <p className="section-copy">{project.description}</p>
          <div className="hero-actions">
          {/* The button will only render if project.website exists and is not empty */}
          {project.website && (
          <a className="button primary" href={project.website} target="_blank" rel="noreferrer">
          Visit website
          </a>
          )}
  
          {project.repo && (
           <a className="button secondary" href={project.repo} target="_blank" rel="noreferrer">
            View GitHub
          </a>
        )}
        </div>
        </div>
        <div className="panel">
          <h3>Project preview</h3>
          <div className="preview-box">
            <img src={project.screenshot} alt={`${project.title} preview`} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
