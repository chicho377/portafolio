import { useEffect, useMemo, useState } from 'react';
import './App.css';

const content = {
  es: {
    rotatingWords: ['funcionales', 'intuitivas', 'escalables', 'modernas'],
    nav: {
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      lightMode: 'Modo claro',
      darkMode: 'Modo oscuro',
      switchLanguage: 'English',
    },
    hero: {
      eyebrow: 'Portafolio · Ingeniería en Sistemas',
      titleStart: 'Desarrollo soluciones',
      titleEnd: 'para software, web y TI.',
      description:
        'Soy Fabricio Mora Gomez, estudiante de Ingeniería en Sistemas en Universidad UTC. Busco una oportunidad para aportar en desarrollo de software, desarrollo web o áreas de TI, mientras continúo creciendo profesionalmente.',
      badges: ['Alajuela, Costa Rica', 'Disponible para oportunidad junior', 'Español nativo · Inglés intermedio'],
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV para Word',
    },
    counters: [
      { label: 'Proyecto real en curso', value: '1' },
      { label: 'Proyectos destacados', value: '6' },
      { label: 'Cuatrimestres restantes', value: '1' },
      { label: 'Interés laboral', value: 'Puesto junior (software/web/TI)' },
    ],
    projectsHeading: 'Proyectos destacados',
    projectsDescription: 'Proyectos reales, académicos y de práctica con enfoque en calidad y buenas prácticas.',
    projects: [
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
    ],
    skillsHeading: 'Habilidades',
    skillsDescription: 'Base técnica sólida con mentalidad de aprendizaje continuo.',
    skills: ['C#', 'Java', 'HTML / CSS / JavaScript', 'PHP', 'MySQL y SQL Server', 'Git, Visual Studio y Jira', 'Scrum (fundamentos)'],
    profileHeading: 'Perfil profesional',
    profileDescription: 'Información clave organizada para un reclutamiento rápido y claro.',
    ideas: [
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
    ],
    stackHeading: 'Tecnologías principales',
    stackDescription: 'Herramientas y lenguajes que utilizo en mis proyectos.',
    techStack: [
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
    ],
    educationEyebrow: 'Educación',
    educationTitle: 'Universidad UTC · Ingeniería en Sistemas',
    educationDescription:
      'Inicio en 2024. Actualmente cursando la etapa final de la carrera, con un cuatrimestre pendiente para finalizar.',
    educationMetrics: [
      { value: '2024', label: 'Año de inicio' },
      { value: '+Cursos', label: 'Platzi y otras plataformas (incluye Scrum)' },
    ],
    journeyHeading: 'Ruta de crecimiento',
    journeyDescription: 'Evolución académica y práctica orientada al desarrollo profesional.',
    timeline: [
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
        description: 'Desarrollo individual del sitio web de 2000Siempre, actualmente en etapa final y pruebas.',
      },
      {
        year: 'Siguiente paso',
        title: 'Ingreso al mercado laboral',
        description: 'Búsqueda activa de oportunidad junior en software, desarrollo web o áreas de TI.',
      },
    ],
    contactHeading: 'Contacto',
    contactDescription:
      'Fabricio Mora Gomez · Cédula 64885279 · Abierto a oportunidades en software, desarrollo web y TI.',
    footer: 'Portafolio profesional.',
    footerExperience: 'Experiencia',
  },
  en: {
    rotatingWords: ['functional', 'intuitive', 'scalable', 'modern'],
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      switchLanguage: 'Español',
    },
    hero: {
      eyebrow: 'Portfolio · Systems Engineering',
      titleStart: 'I build',
      titleEnd: 'solutions for software, web, and IT.',
      description:
        'I am Fabricio Mora Gomez, a Systems Engineering student at UTC University. I am looking for an opportunity to contribute in software development, web development, or IT areas while continuing to grow professionally.',
      badges: ['Alajuela, Costa Rica', 'Open to junior opportunities', 'Native Spanish · Intermediate English'],
      viewProjects: 'View projects',
      downloadCv: 'Download CV for Word',
    },
    counters: [
      { label: 'Real-world project in progress', value: '1' },
      { label: 'Highlighted projects', value: '6' },
      { label: 'Terms remaining', value: '1' },
      { label: 'Career interest', value: 'Junior role (software/web/IT)' },
    ],
    projectsHeading: 'Featured projects',
    projectsDescription: 'Real, academic, and practice projects focused on quality and best practices.',
    projects: [
      {
        title: 'Corporate website · 2000Siempre',
        tag: 'Real project (final stage)',
        description:
          'End-to-end design and development of a website for a construction company without templates, covering analysis, implementation, final adjustments, and testing.',
      },
      {
        title: 'DreamMovie',
        tag: 'Featured project',
        description:
          'Creation of a cinema ticketing web platform from scratch: business idea, branding, requirements, mockups, and development with HTML, CSS, JS, PHP, and MySQL.',
      },
      {
        title: 'VITALIFE',
        tag: 'Desktop project',
        description:
          'Point-of-sale system for a pharmacy focused on user experience and role-based access control, built with C#, .NET, and SQL Server.',
      },
      {
        title: 'Professional personal portfolio',
        tag: 'Personal project',
        description:
          'Continuous development and improvement of a web portfolio to present my technical profile, skills, and projects with a junior employability focus.',
      },
      {
        title: 'Technical documentation practice',
        tag: 'Academic/personal project',
        description:
          'Creation of functional and technical documentation for university and personal projects, applying clear structure and best practices.',
      },
      {
        title: 'Web development exercises',
        tag: 'Hands-on training',
        description:
          'Development of mini projects and exercises to strengthen logic, frontend, and backend skills using technologies such as HTML, CSS, JavaScript, and PHP.',
      },
    ],
    skillsHeading: 'Skills',
    skillsDescription: 'Solid technical foundation with a continuous learning mindset.',
    skills: ['C#', 'Java', 'HTML / CSS / JavaScript', 'PHP', 'MySQL and SQL Server', 'Git, Visual Studio, and Jira', 'Scrum (fundamentals)'],
    profileHeading: 'Professional profile',
    profileDescription: 'Key information organized for fast and clear recruiting.',
    ideas: [
      {
        title: 'Clear professional goal',
        description: 'Profile focused on building software solutions that are functional, intuitive, and aligned with business needs.',
      },
      {
        title: 'Differentiating value',
        description: 'Experience in projects that cover the full cycle: idea, documentation, design, development, and testing.',
      },
      {
        title: 'Continuous improvement mindset',
        description: 'Constant learning in agile methodologies, modern tools, and software best practices.',
      },
    ],
    stackHeading: 'Main technologies',
    stackDescription: 'Tools and languages I use in my projects.',
    techStack: [
      {
        name: 'C#',
        description: 'Desktop applications and business logic.',
        color: 'javascript',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Java',
        description: 'Strong object-oriented programming fundamentals.',
        color: 'react',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'PHP',
        description: 'Backend development for web solutions.',
        color: 'figma',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
      {
        name: 'MySQL / SQL Server',
        description: 'Modeling and management of relational databases.',
        color: 'css',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'Git',
        description: 'Version control for organized and collaborative work.',
        color: 'git',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
    educationEyebrow: 'Education',
    educationTitle: 'UTC University · Systems Engineering',
    educationDescription:
      'Started in 2024. I am currently in the final stage of the degree, with one term left to finish.',
    educationMetrics: [
      { value: '2024', label: 'Start year' },
      { value: '+Courses', label: 'Platzi and other platforms (including Scrum)' },
    ],
    journeyHeading: 'Growth journey',
    journeyDescription: 'Academic and practical evolution focused on professional development.',
    timeline: [
      {
        year: '2024',
        title: 'Started Systems Engineering',
        description: 'Began studies at UTC University with focus on software development and IT.',
      },
      {
        year: '2024-2025',
        title: 'Complementary training',
        description: 'Courses on Platzi and other platforms, including Scrum fundamentals and development best practices.',
      },
      {
        year: 'Current',
        title: 'Construction company project',
        description: 'Individual development of the 2000Siempre website, currently in final stage and testing.',
      },
      {
        year: 'Next step',
        title: 'Entering the job market',
        description: 'Actively seeking a junior opportunity in software, web development, or IT areas.',
      },
    ],
    contactHeading: 'Contact',
    contactDescription:
      'Fabricio Mora Gomez · ID 64885279 · Open to opportunities in software, web development, and IT.',
    footer: 'Professional portfolio.',
    footerExperience: 'Experience',
  },
};

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

  useEffect(() => {
    setIndex(0);
  }, [words]);

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
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'es';
    }

    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage === 'en' ? 'en' : 'es';
  });

  const t = content[language];
  const rotatingWord = useRotatingWords(t.rotatingWords);
  const now = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('language', language);
  }, [language]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">FABRICIO MORA</div>
          <div className="nav-links">
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#experiencia">{t.nav.experience}</a>
            <a href="#contacto" className="cta">{t.nav.contact}</a>
            <button className="theme-toggle" type="button" onClick={handleToggleLanguage}>
              {t.nav.switchLanguage}
            </button>
            <button className="theme-toggle" type="button" onClick={handleToggleTheme}>
              {theme === 'light' ? t.nav.darkMode : t.nav.lightMode}
            </button>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titleStart} <span className="gradient-text">{rotatingWord}</span> {t.hero.titleEnd}
          </h1>
          <p className="hero-description">{t.hero.description}</p>
          <div className="hero-badges">
            {t.hero.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary" href="#proyectos">{t.hero.viewProjects}</a>
            <a className="ghost" href="/public/CV_Fabricio_Mora_Gomez.docx" download>
              {t.hero.downloadCv}
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {t.counters.map((counter) => (
            <div key={counter.label} className="stat">
              <h3>{counter.value}</h3>
              <p>{counter.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section id="proyectos" className="section projects">
        <div className="section-heading">
          <h2>{t.projectsHeading}</h2>
          <p>{t.projectsDescription}</p>
        </div>
        <div className="project-grid">
          {t.projects.map((project) => (
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
          <h2>{t.skillsHeading}</h2>
          <p>{t.skillsDescription}</p>
        </div>
        <div className="skills-grid">
          {t.skills.map((skill) => (
            <div key={skill} className="skill-chip">
              <span>{skill}</span>
              <div className="skill-pulse"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section ideas">
        <div className="section-heading">
          <h2>{t.profileHeading}</h2>
          <p>{t.profileDescription}</p>
        </div>
        <div className="ideas-grid">
          {t.ideas.map((idea) => (
            <article key={idea.title} className="idea-card">
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack">
        <div className="section-heading">
          <h2>{t.stackHeading}</h2>
          <p>{t.stackDescription}</p>
        </div>
        <div className="stack-grid">
          {t.techStack.map((tool) => (
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
            {t.techStack.concat(t.techStack).map((tool, index) => (
              <span key={`${tool.name}-${index}`}>{tool.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase">
        <div className="showcase-card">
          <div>
            <p className="eyebrow">{t.educationEyebrow}</p>
            <h2>{t.educationTitle}</h2>
            <p>{t.educationDescription}</p>
          </div>
          <div className="showcase-metrics">
            {t.educationMetrics.map((metric) => (
              <div key={metric.label}>
                <h3>{metric.value}</h3>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="section timeline">
        <div className="section-heading">
          <h2>{t.journeyHeading}</h2>
          <p>{t.journeyDescription}</p>
        </div>
        <div className="timeline-grid">
          {t.timeline.map((item) => (
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
            <h2>{t.contactHeading}</h2>
            <p>{t.contactDescription}</p>
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
        <p>© {now} Fabricio Mora Gomez · {t.footer}</p>
        <div className="footer-links">
          <a href="mailto:morafabricio86@gmail.com">Email</a>
          <a href="https://github.com/chicho377" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#experiencia">{t.footerExperience}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
