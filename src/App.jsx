import { useEffect, useMemo, useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Campus Hub',
    tag: 'Proyecto académico',
    description:
      'Plataforma para organizar eventos universitarios con UX enfocada en estudiantes y notificaciones inteligentes.',
  },
  {
    title: 'LightBox Studio',
    tag: 'Proyecto freelance',
    description:
      'Landing page con identidad visual moderna y storytelling para un estudio creativo local.',
  },
  {
    title: 'Pulse Track',
    tag: 'Hackathon',
    description:
      'Dashboard en tiempo real para métricas de entrenamiento con visualizaciones fluidas y accesibles.',
  },
];

const skills = [
  'React + Motion UI',
  'UX/UI Design',
  'Design Systems',
  'Prototipado rápido',
  'Datos & visualización',
  'Aprendizaje continuo',
];

const timeline = [
  {
    year: '2021',
    title: 'Inicio en UX/UI',
    description: 'Empecé a diseñar interfaces y aprendí fundamentos de diseño centrado en personas.',
  },
  {
    year: '2022',
    title: 'Proyectos académicos',
    description: 'Colaboré en equipos multidisciplinarios creando productos digitales para clase.',
  },
  {
    year: '2023',
    title: 'Hackathons & Freelance',
    description: 'Participé en hackathons y apoyé a emprendimientos locales con diseño web.',
  },
  {
    year: '2024',
    title: 'Búsqueda de empleo',
    description: 'Listo para aplicar mis habilidades en un equipo y seguir creciendo.',
  },
];

const testimonials = [
  {
    quote:
      '“Tiene una sensibilidad visual increíble y siempre busca mejorar la experiencia del usuario.”',
    author: 'Camila Torres · Mentora UX',
  },
  {
    quote:
      '“En el hackathon fue clave para aterrizar ideas complejas en interfaces claras.”',
    author: 'Luis Méndez · Product Mentor',
  },
];

const portfolioIdeas = [
  {
    title: 'Caso interactivo con scroll narrativo',
    description:
      'Cuenta un proyecto como si fuera un mini documental: plantea el reto, muestra decisiones clave y termina con resultados medibles.',
  },
  {
    title: 'Mapa de impacto en tiempo real',
    description:
      'Una visualización que conecte tus proyectos con objetivos reales (engagement, ventas, accesibilidad) usando data simulada.',
  },
  {
    title: 'Experimentos rápidos “1 semana”',
    description:
      'Microproyectos de 5 a 7 días con hipótesis, prototipo y aprendizajes. Muestran velocidad y mentalidad iterativa.',
  },
  {
    title: 'Laboratorio de IA creativa',
    description:
      'Explora prompts, flujos y resultados de IA para diseño o copy, con reflexiones sobre ética y criterio visual.',
  },
  {
    title: 'Kit de diseño personal',
    description:
      'Incluye tokens, componentes y pautas de accesibilidad para demostrar pensamiento sistémico.',
  },
  {
    title: 'Backstage de procesos',
    description:
      'Muestra wireframes, feedback recibido y cómo iteraste. Humaniza el trabajo y demuestra colaboración.',
  },
];

const counters = [
  { label: 'Proyectos académicos', value: 12 },
  { label: 'Hackathons', value: 4 },
  { label: 'Colaboraciones', value: 6 },
  { label: 'Horas de estudio', value: '800+' },
];

const techStack = [
  {
    name: 'React',
    description: 'UI moderna y componentes reutilizables.',
    color: 'react',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <g fill="none" stroke="#61DAFB" strokeWidth="6">
          <ellipse cx="64" cy="64" rx="46" ry="18" />
          <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="46" ry="18" transform="rotate(120 64 64)" />
        </g>
        <circle cx="64" cy="64" r="8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    description: 'Interacciones y lógica dinámica.',
    color: 'javascript',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path
          d="M47 104l10-6c2 4 5 8 11 8 5 0 9-2 9-11V56h12v40c0 15-9 22-22 22-12 0-19-6-22-14zm44-2l10-6c3 5 7 8 14 8 6 0 10-3 10-7 0-5-4-7-11-10l-4-2c-12-5-20-11-20-24 0-12 9-20 23-20 10 0 17 4 23 14l-10 7c-2-4-6-7-12-7-6 0-9 3-9 7 0 5 3 7 10 10l4 2c14 6 22 12 22 26 0 15-12 23-27 23-15 0-25-7-29-16z"
          fill="#111827"
        />
      </svg>
    ),
  },
  {
    name: 'Figma',
    description: 'Prototipos y sistemas visuales.',
    color: 'figma',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path d="M50 12a18 18 0 1 1 0 36H32V30a18 18 0 0 1 18-18z" fill="#F24E1E" />
        <path d="M78 12a18 18 0 1 1 0 36H50V12z" fill="#FF7262" />
        <path d="M50 46h18a18 18 0 1 1 0 36H50V46z" fill="#A259FF" />
        <path d="M50 80a18 18 0 1 1 0 36H32V98a18 18 0 0 1 18-18z" fill="#1ABCFE" />
        <path d="M96 64a18 18 0 1 1-36 0 18 18 0 0 1 36 0z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    description: 'Animaciones y diseño responsivo.',
    color: 'css',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path d="M19 8h90l-8 92-37 12-37-12z" fill="#264DE4" />
        <path d="M64 108l30-10 7-78H64z" fill="#2965F1" />
        <path d="M42 32h22v12H54l1 12h9v12H43z" fill="#EBEBEB" />
        <path d="M84 32H64v12h19l-2 12H64v12h16l-2 14-14 4v12l25-8 3-32z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Git',
    description: 'Colaboración y control de versiones.',
    color: 'git',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path
          d="M116 58L70 12a8 8 0 0 0-12 0L12 58a8 8 0 0 0 0 12l46 46a8 8 0 0 0 12 0l46-46a8 8 0 0 0 0-12z"
          fill="#F05033"
        />
        <path
          d="M60 40a8 8 0 1 0 6 14l14 14a8 8 0 1 0 4-3l-15-15a8 8 0 0 0-9-10zm0 40a8 8 0 1 0 6 14l12 12a8 8 0 1 0 4-4L68 88a8 8 0 0 0-8-8z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

function usePointerGlow() {
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--pointer-x', `${x}%`);
      document.documentElement.style.setProperty('--pointer-y', `${y}%`);
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
}

function useRotatingWords(words) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [words.length]);

  return words[index];
}

function App() {
  usePointerGlow();
  const rotatingWord = useRotatingWords(['interactiva', 'humana', 'futurista', 'curiosa']);
  const now = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">LUMINA</div>
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#skills">Skills</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto" className="cta">Hablemos</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Portafolio · Estudiante de Diseño & Producto</p>
          <h1>
            Creo experiencias{' '}
            <span className="gradient-text">{rotatingWord}</span> que convierten ideas en
            impacto real.
          </h1>
          <p className="hero-description">
            Soy estudiante de diseño digital y construyo productos con estética moderna,
            microinteracciones y narrativas claras. Busco mi primera oportunidad para crecer en
            un equipo que valore la curiosidad y el aprendizaje continuo.
          </p>
          <div className="hero-badges">
            <span>Disponible para prácticas</span>
            <span>Remoto / Presencial</span>
            <span>UX/UI + Frontend</span>
          </div>
          <div className="hero-actions">
            <button className="primary">Ver proyectos</button>
            <button className="ghost">Descargar CV</button>
          </div>
        </div>

        <div className="hero-stats">
          {counters.map((counter) => (
            <div key={counter.label} className="stat">
              <h3>{counter.value}</h3>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section id="proyectos" className="section projects">
        <div className="section-heading">
          <h2>Proyectos destacados</h2>
          <p>
            Proyectos académicos, hackathons y colaboraciones que muestran mi potencial.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-glow"></div>
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="link">Ver caso →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-heading">
          <h2>Skills en evolución</h2>
          <p>
            Estoy en constante aprendizaje para unir diseño, tecnología y emoción.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-chip">
              <span>{skill}</span>
              <div className="skill-pulse"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section ideas">
        <div className="section-heading">
          <h2>Ideas para un portafolio innovador</h2>
          <p>
            Propuestas que resaltan storytelling, data y procesos para que tu trabajo se
            sienta diferente y memorable.
          </p>
        </div>
        <div className="ideas-grid">
          {portfolioIdeas.map((idea) => (
            <article key={idea.title} className="idea-card">
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack">
        <div className="section-heading">
          <h2>Stack creativo</h2>
          <p>Herramientas y tecnologías que uso para construir experiencias visuales.</p>
        </div>
        <div className="stack-grid">
          {techStack.map((tool) => (
            <div key={tool.name} className={`stack-card ${tool.color}`}>
              <div className="stack-icon">{tool.svg}</div>
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="stack-marquee">
          <div className="marquee-track">
            {techStack.concat(techStack).map((tool, index) => (
              <span key={`${tool.name}-${index}`}>{tool.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase">
        <div className="showcase-card">
          <div>
            <p className="eyebrow">Laboratorio creativo</p>
            <h2>Transformo ideas en experiencias listas para el mundo real</h2>
            <p>
              Desde landing pages hasta dashboards, cada entrega está pensada para comunicar
              valor y sumar impacto al equipo.
            </p>
          </div>
          <div className="showcase-metrics">
            <div>
              <h3>+18</h3>
              <p>Prototipos creados en el último año</p>
            </div>
            <div>
              <h3>3</h3>
              <p>Equipos multidisciplinarios</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section timeline">
        <div className="section-heading">
          <h2>Ruta de aprendizaje</h2>
          <p>Una evolución constante entre creatividad, producto y tecnología.</p>
        </div>
        <div className="timeline-grid">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-card">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <h2>Lo que dicen de mí</h2>
          <p>Feedback de mentores y compañeros con los que colaboré.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.author} className="testimonial-card">
              <p>{item.quote}</p>
              <span>{item.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="contact-card">
          <div>
            <h2>¿Buscas talento junior con ganas de crecer?</h2>
            <p>
              Estoy listo para aportar energía, aprendizaje y creatividad a tu equipo. Respondo en
              menos de 24 horas.
            </p>
          </div>
          <div className="contact-actions">
            <button className="primary">Agendar entrevista</button>
            <button className="ghost">hola@tuemail.com</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {now} Portafolio estudiantil. Diseñado para inspirar.</p>
        <div className="footer-links">
          <a href="https://behance.net">Behance</a>
          <a href="https://dribbble.com">Dribbble</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
