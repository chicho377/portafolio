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
        <rect x="12" y="12" width="104" height="104" rx="12" fill="#F7DF1E" />
        <path
          d="M38 92l8-4c2 4 4 7 9 7 4 0 7-2 7-9V58h10v29c0 11-6 17-16 17-9 0-14-5-17-12zm40-1l8-5c2 4 5 7 10 7 4 0 7-2 7-5 0-4-3-5-8-7l-3-1c-9-4-15-8-15-18 0-9 7-15 17-15 8 0 13 3 17 10l-8 5c-2-3-4-5-9-5-4 0-7 2-7 5 0 3 2 5 7 7l3 1c10 4 16 9 16 19 0 11-9 17-19 17-11 0-18-5-21-12z"
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
        <path d="M48 16a16 16 0 1 1 0 32H32V32a16 16 0 0 1 16-16z" fill="#F24E1E" />
        <path d="M80 16a16 16 0 1 1 0 32H48V16z" fill="#FF7262" />
        <path d="M48 48h16a16 16 0 1 1 0 32H48V48z" fill="#A259FF" />
        <path d="M48 80a16 16 0 1 1 0 32H32V96a16 16 0 0 1 16-16z" fill="#1ABCFE" />
        <path d="M80 64a16 16 0 1 1-32 0 16 16 0 0 1 32 0z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    description: 'Animaciones y diseño responsivo.',
    color: 'css',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path d="M20 14h88l-8 90-36 12-36-12z" fill="#1572B6" />
        <path d="M64 110l29-9 7-78H64z" fill="#33A9DC" />
        <path d="M44 40h20v12H56l1 12h7v12H46zm0 28h12l1 12 7 2v13l-17-6z" fill="#fff" />
        <path d="M84 40H64v12h19l-2 12H64v12h15l-1 12-14 4v13l26-8 3-31z" fill="#EBEBEB" />
      </svg>
    ),
  },
  {
    name: 'Git',
    description: 'Colaboración y control de versiones.',
    color: 'git',
    svg: (
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <path d="M118 58L70 10a6 6 0 0 0-8 0L10 62a6 6 0 0 0 0 8l48 48a6 6 0 0 0 8 0l52-52a6 6 0 0 0 0-8z" fill="#F03C2E" />
        <path
          d="M60 36a8 8 0 1 0 5 14l12 12a8 8 0 1 0 4-3l-13-13a8 8 0 0 0-8-10zm0 40a8 8 0 1 0 5 14l14 14a8 8 0 1 0 4-4L69 86a8 8 0 0 0-9-10z"
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
