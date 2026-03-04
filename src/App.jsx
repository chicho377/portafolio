import { useEffect, useMemo, useState } from 'react';
import './App.css';

const projects = [
  {
    title: 'Sitio web corporativo · 2000Siempre',
    tag: 'Proyecto real (en proceso final)',
    description:
      'Diseño y desarrollo completo de una web para empresa constructora, sin plantillas, cubriendo análisis, implementación, ajustes finales y testeo.',
  },
  {
    title: 'DreamMovie',
    tag: 'Proyecto destacado',
    description:
      'Creación de una plataforma web de boletería para cine desde cero: idea de negocio, branding, requerimientos, mockups y desarrollo con HTML, CSS, JS, PHP y MySQL.',
  },
  {
    title: 'VITALIFE',
    tag: 'Proyecto de escritorio',
    description:
      'Sistema tipo punto de venta para farmacia con enfoque en experiencia de usuario y control de accesos por roles, desarrollado con C#, .NET y SQL Server.',
  },
  {
    title: 'Portafolio personal profesional',
    tag: 'Proyecto personal',
    description:
      'Construcción y mejora continua de un portafolio web para presentar perfil técnico, habilidades y proyectos con enfoque de empleabilidad junior.',
  },
  {
    title: 'Prácticas de documentación técnica',
    tag: 'Proyecto académico/personal',
    description:
      'Elaboración de documentación funcional y técnica para proyectos universitarios y personales, aplicando estructura clara y buenas prácticas.',
  },
  {
    title: 'Ejercicios de desarrollo web',
    tag: 'Formación práctica',
    description:
      'Desarrollo de mini proyectos y prácticas para reforzar lógica, frontend y backend con tecnologías como HTML, CSS, JavaScript y PHP.',
  },
];

const skills = [
  'C#',
  'Java',
  'HTML / CSS / JavaScript',
  'PHP',
  'MySQL y SQL Server',
  'Git, Visual Studio y Jira',
  'Scrum (fundamentos)',
];

const timeline = [
  {
    year: '2024',
    title: 'Inicio de Ingeniería en Sistemas',
    description: 'Ingreso a Universidad UTC y enfoque en desarrollo de software y TI.',
  },
  {
    year: '2024-2025',
    title: 'Formación complementaria',
    description:
      'Cursos en Platzi y otras plataformas, incluyendo fundamentos de Scrum y buenas prácticas de desarrollo.',
  },
  {
    year: 'Actualidad',
    title: 'Proyecto para empresa constructora',
    description:
      'Desarrollo individual del sitio web de 2000Siempre, actualmente en etapa final y pruebas.',
  },
  {
    year: 'Siguiente paso',
    title: 'Ingreso al mercado laboral',
    description:
      'Búsqueda activa de oportunidad junior en software, desarrollo web o áreas de TI.',
  },
];

const portfolioIdeas = [
  {
    title: 'Objetivo profesional claro',
    description:
      'Perfil orientado a construir soluciones de software funcionales, intuitivas y alineadas con necesidades de negocio.',
  },
  {
    title: 'Valor diferencial',
    description:
      'Experiencia en proyectos donde se cubre el ciclo completo: idea, documentación, diseño, desarrollo y pruebas.',
  },
  {
    title: 'Enfoque de mejora continua',
    description:
      'Aprendizaje constante en metodologías ágiles, herramientas modernas y buenas prácticas de desarrollo.',
  },
];

const counters = [
  { label: 'Proyecto real en curso', value: '1' },
  { label: 'Proyectos destacados', value: '6' },
  { label: 'Cuatrimestres restantes', value: '1' },
  { label: 'Interés laboral', value: 'Puesto junior (software/web/TI)' },
];

const techStack = [
  {
    name: 'C#',
    description: 'Aplicaciones de escritorio y lógica de negocio.',
    color: 'javascript',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    name: 'Java',
    description: 'Fundamentos sólidos de programación orientada a objetos.',
    color: 'react',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'PHP',
    description: 'Desarrollo backend para soluciones web.',
    color: 'figma',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'MySQL / SQL Server',
    description: 'Modelado y gestión de bases de datos relacionales.',
    color: 'css',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Git',
    description: 'Control de versiones para trabajo organizado y colaborativo.',
    color: 'git',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
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
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const rotatingWord = useRotatingWords(['funcionales', 'intuitivas', 'escalables', 'modernas']);
  const now = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">FABRICIO MORA</div>
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto" className="cta">Contacto</a>
            <button className="theme-toggle" type="button" onClick={handleToggleTheme}>
              {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Portafolio · Ingeniería en Sistemas</p>
          <h1>
            Desarrollo soluciones <span className="gradient-text">{rotatingWord}</span> para
            software, web y TI.
          </h1>
          <p className="hero-description">
            Soy Fabricio Mora Gomez, estudiante de Ingeniería en Sistemas en Universidad UTC.
            Busco una oportunidad para aportar en desarrollo de software, desarrollo web o áreas de
            TI, mientras continúo creciendo profesionalmente.
          </p>
          <div className="hero-badges">
            <span>Alajuela, Costa Rica</span>
            <span>Disponible para oportunidad junior</span>
            <span>Español nativo · Inglés intermedio</span>
          </div>
          <div className="hero-actions">
            <a className="primary" href="#proyectos">Ver proyectos</a>
            <a className="ghost" href="/public/CV_Fabricio_Mora_Gomez.docx" download>
              Descargar CV para Word
            </a>
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
          <p>Proyectos reales, académicos y de práctica con enfoque en calidad y buenas prácticas.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-glow"></div>
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-heading">
          <h2>Habilidades</h2>
          <p>Base técnica sólida con mentalidad de aprendizaje continuo.</p>
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
          <h2>Perfil profesional</h2>
          <p>Información clave organizada para un reclutamiento rápido y claro.</p>
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
          <h2>Tecnologías principales</h2>
          <p>Herramientas y lenguajes que utilizo en mis proyectos.</p>
        </div>
        <div className="stack-grid">
          {techStack.map((tool) => (
            <div key={tool.name} className={`stack-card ${tool.color}`}>
              <div className="stack-icon">
                <img src={tool.logoUrl} alt={`${tool.name} logo`} loading="lazy" />
              </div>
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
            <p className="eyebrow">Educación</p>
            <h2>Universidad UTC · Ingeniería en Sistemas</h2>
            <p>
              Inicio en 2024. Actualmente cursando la etapa final de la carrera, con un cuatrimestre
              pendiente para finalizar.
            </p>
          </div>
          <div className="showcase-metrics">
            <div>
              <h3>2024</h3>
              <p>Año de inicio</p>
            </div>
            <div>
              <h3>+Cursos</h3>
              <p>Platzi y otras plataformas (incluye Scrum)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section timeline">
        <div className="section-heading">
          <h2>Ruta de crecimiento</h2>
          <p>Evolución académica y práctica orientada al desarrollo profesional.</p>
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

      <section id="contacto" className="section contact">
        <div className="contact-card">
          <div>
            <h2>Contacto</h2>
            <p>
              Fabricio Mora Gomez · Cédula 64885279 · Abierto a oportunidades en software,
              desarrollo web y TI.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary" href="mailto:morafabricio86@gmail.com">morafabricio86@gmail.com</a>
            <a className="ghost" href="https://github.com/chicho377" target="_blank" rel="noreferrer">
              github.com/chicho377
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {now} Fabricio Mora Gomez · Portafolio profesional.</p>
        <div className="footer-links">
          <a href="mailto:morafabricio86@gmail.com">Email</a>
          <a href="https://github.com/chicho377" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#experiencia">Experiencia</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
