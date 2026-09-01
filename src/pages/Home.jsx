import { useEffect, useState } from "react";
import { Github, Linkedin, Sun, Moon, Play, ArrowUp } from "lucide-react";

const projects = [
  {
    title: {
      en: "Wang: Real Estate Platform",
      es: "Wang: Plataforma Inmobiliaria",
    },
    description: {
      en: "Implemented a real estate web system with a REST API, automating property and user management to improve process efficiency.",
      es: "Implementé un sistema web inmobiliario con una API REST, automatizando la gestión de propiedades y usuarios para mejorar la eficiencia de los procesos.",
    },
    codeUrl: "https://github.com/danieltlachy/Wang_Frontend/tree/main",
    videoUrl: "https://youtu.be/LKhyzvD11_g",
    tags: ["HTML/CSS", "JavaScript", "MySQL", "Node.js"],
  },
  {
    title: {
      en: "Hangman Desktop Application",
      es: "Aplicación de Escritorio Ahorcado",
    },
    description: {
      en: "Designed and developed a Hangman game with a Client-Server architecture, achieving real-time communication using TCP/IP sockets and asynchronous callbacks.",
      es: "Diseñé y desarrollé un juego de Ahorcado con arquitectura Cliente-Servidor, logrando comunicación en tiempo real mediante sockets TCP/IP y callbacks asíncronos.",
    },
    codeUrl: "https://github.com/danieltlachy/Hangman",
    videoUrl: "https://youtu.be/pCy5Vh1x6EQ",
    tags: ["C#", "WPF", "WCF", "Sockets"],
  },
  {
    title: {
      en: "Golf Clothing System",
      es: "Sistema de Ropa Golf",
    },
    description: {
      en: "Designed and developed an e-commerce system for selling clothing and accessories, integrated with a REST API built on Node.js.",
      es: "Diseñé y desarrollé un sistema de e-commerce para la venta de ropa y accesorios, integrado con una API REST construida en Node.js.",
    },
    codeUrl: "https://github.com/danieltlachy/GOLF_Google",
    videoUrl: "https://youtu.be/jDAKe7isWqo",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: {
      en: "Secure Programming Exercises",
      es: "Ejercicios de Programación Segura",
    },
    description: {
      en: "Secure Programming exercises about Common Weakness Enumeration (CWE) and how to mitigate them, including code examples and documentation.",
      es: "Ejercicios de la materia de Programación Segura acerca de los Common Weakness Enumeration (CWE) y cómo mitigarlos, incluyendo ejemplos de código y documentación.",
    },
    codeUrl: "https://github.com/danieltlachy/Ejercicios_Programacion_Segura",
    videoUrl: "#",
    tags: ["Assembly", "C", "HTML", "JavaScript", "PHP", "Python"],
  },
  {
    title: {
      en: "Mobile Application Development Exercises",
      es: "Ejercicios de Desarrollo de Aplicaciones Móviles",
    },
    description: {
      en: "Exercises for developing mobile applications, covering various platforms and technologies.",
      es: "Ejercicios para el desarrollo de aplicaciones móviles, cubriendo diversas plataformas y tecnologías.",
    },
    codeUrl:
      "https://github.com/danieltlachy/Ejercicios_Desarrollo_Aplicaciones",
    videoUrl: "#",
    tags: ["Kotlin", "Maven", "Android Studio", "Java", "XML"],
  },
];

const experience = [
  {
    role: {
      en: "Tarjeta Más Juventud – H. Ayuntamiento de Xalapa",
      es: "Tarjeta Más Juventud – H. Ayuntamiento de Xalapa",
    },
    stack: "React / Tailwind CSS / C# / HTML5 / CSS3 / PostgreSQL",
    period: { en: "Feb 2026 – May 2026", es: "Feb 2026 – May 2026" },
    bullets: {
      en: [
        'Co-designed and developed the "Tarjeta Más Juventud" web platform using the ICONIX methodology, targeted at local youth to access commercial discounts across local participating businesses.',
        "Authored the vision and scope document, software architecture specification, and test plans following ISO 29119-1 standards.",
      ],
      es: [
        'Co-diseñé y desarrollé la plataforma web "Tarjeta Más Juventud" usando la metodología ICONIX, dirigida a jóvenes locales para acceder a descuentos comerciales en negocios participantes.',
        "Redacté el documento de visión y alcance, la especificación de arquitectura de software y los planes de prueba siguiendo los estándares ISO 29119-1.",
      ],
    },
    docs: [
      {
        label: { en: "Vision & Scope", es: "Visión y Alcance" },
        url: "/DocumentoVisionAlcance_TarjetaMasJuventud.pdf",
      },
      {
        label: { en: "Requirements Spec", es: "Especificación de Requisitos" },
        url: "/DocumentoEspecificacionRequisitos_TarjetaMasJuventud.pdf",
      },
      {
        label: {
          en: "Test Plan (ISO 29119-1)",
          es: "Plan de Pruebas (ISO 29119-1)",
        },
        url: "/DocumentoPlanPruebas_TarjetaMasJuventud.pdf",
      },
    ],
  },
  {
    role: {
      en: "Institutional ChatBot – Instituto de Pensiones del Estado de Veracruz",
      es: "ChatBot Institucional – Instituto de Pensiones del Estado de Veracruz",
    },
    stack: "C# / Node.js / Baileys.js / HTML5 / CSS3 / SQL Server",
    period: { en: "Aug 2025 – Feb 2026", es: "Ago 2025 – Feb 2026" },
    bullets: {
      en: [
        "Co-designed and upgraded an existing institutional ChatBot using the ICONIX methodology, enhancing process efficiency, usability, and clarity for digital services targeted at beneficiaries.",
        "Analyzed and implemented system architecture improvements, database optimizations, and core development processes to build a scalable and robust platform.",
      ],
      es: [
        "Co-diseñé y mejoré un ChatBot institucional existente usando la metodología ICONIX, mejorando la eficiencia de los procesos, la usabilidad y la claridad de los servicios digitales dirigidos a los beneficiarios.",
        "Analicé e implementé mejoras de arquitectura del sistema, optimizaciones de base de datos y procesos de desarrollo clave para construir una plataforma escalable y robusta.",
      ],
    },
    docs: [
      {
        label: { en: "Requirements Spec", es: "Especificación de Requisitos" },
        url: "/DocumentoEspecificacionRequisitos_Chatbot.pdf",
      },
      {
        label: { en: "Improvements Proposal", es: "Propuesta de Mejoras" },
        url: "/PropuestaMejoras_Chatbot.pdf",
      },
    ],
  },
];

const copy = {
  en: {
    title: "Jr. Software Engineer",
    experienceHeading: "Relevant Experience:",
    docsHeading: "Additional Documentation:",
    projectsHeading: "Relevant Projects:",
    viewAll: "View All",
    watch: "Watch",
    code: "Code",
    contactEmail: "contactdanielmongeote@gmail.com",
    footer: "All rights reserved.",
    downloadCV: "Download CV",
    cvUrl: "/CV_ENG.pdf",
    noticeText:
      "This site uses privacy-friendly analytics (Umami) that does not set cookies or track you across sites.",
    noticeOk: "Got it",
  },
  es: {
    title: "Ingeniero de Software Jr.",
    experienceHeading: "Experiencia Relevante:",
    docsHeading: "Documentación Adicional:",
    projectsHeading: "Proyectos Relevantes:",
    viewAll: "Ver Todos",
    watch: "Ver",
    code: "Código",
    contactEmail: "contactdanielmongeote@gmail.com",
    footer: "Todos los derechos reservados.",
    downloadCV: "Descargar CV",
    cvUrl: "/CV_SPA.pdf",
    noticeText:
      "Este sitio usa analítica respetuosa de la privacidad (Umami) que no establece cookies ni rastrea tu actividad entre sitios.",
    noticeOk: "Entendido",
  },
};

export const Home = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored ? stored === "dark" : true;
  });
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("portfolio-lang");
    return stored === "es" ? "es" : "en";
  });
  const [showTop, setShowTop] = useState(false);
  const [showNotice, setShowNotice] = useState(() => {
    return localStorage.getItem("portfolio-privacy-notice") !== "dismissed";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const switchLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dismissNotice = () => {
    localStorage.setItem("portfolio-privacy-notice", "dismissed");
    setShowNotice(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  const t = copy[lang];

  return (
    <div className="site">
      <p className="sr-only" role="status" aria-live="polite">
        {lang === "es"
          ? "Idioma cambiado a español"
          : "Language changed to English"}
      </p>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#">{t.navHome}</a>
        </nav>

        <div className="header-icons">
          <button
            className="lang-toggle"
            onClick={switchLang}
            aria-label={
              lang === "en" ? "Switch to Spanish" : "Switch to English"
            }
            aria-pressed={lang === "es"}
          >
            {lang === "en" ? "SPA" : "ENG"}
          </button>
          <button
            className="icon-btn"
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <img
            className="hero-avatar"
            src="/avatar.png"
            alt="Daniel Mongeote Tlachy"
          />
          <h1>Daniel Mongeote Tlachy</h1>
          <h2>{t.title}</h2>
          <a className="cv-button" href={t.cvUrl} download>
            {t.downloadCV}
          </a>
        </section>

        <section id="experience" aria-label="Experience section">
          <div className="section-heading">
            <h3>{t.experienceHeading}</h3>
          </div>

          {experience.map((item) => (
            <article key={item.role.en} className="exp-item">
              <div className="exp-head">
                <h4>{item.role[lang]}</h4>
                <span className="exp-period">{item.period[lang]}</span>
              </div>
              <div className="exp-stack">{item.stack}</div>
              <ul className="exp-bullets">
                {item.bullets[lang].map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="exp-docs">
                <span className="exp-docs-label">{t.docsHeading}</span>
                <div className="exp-docs-links">
                  {item.docs.map((doc) => (
                    <a
                      key={doc.url}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={doc.download || undefined}
                    >
                      {doc.label[lang]} {doc.download ? "↓" : "↗"}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" aria-label="Projects section">
          <div className="section-heading">
            <h3>{t.projectsHeading}</h3>
            <a
              className="view-link"
              href="https://github.com/danieltlachy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.viewAll}
            </a>
          </div>

          {projects.map((project) => (
            <article key={project.title.en} className="project-item">
              <div className="project-head">
                <h4>{project.title[lang]}</h4>
              </div>

              <p>{project.description[lang]}</p>

              <div className="project-links">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Play size={14} />
                  {t.watch}
                  <span className="proj-arrow">↗</span>
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={14} />
                  {t.code}
                  <span className="proj-arrow">↗</span>
                </a>
              </div>

              <div className="project-meta">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-item">
          <a href={`mailto:${t.contactEmail}`}>{t.contactEmail}</a>
        </div>
        <p>
          © {new Date().getFullYear()} Daniel Tlachy. {t.footer}
        </p>

        <div className="social-links">
          <a
            href="https://github.com/danieltlachy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-tlachy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </footer>

      {showNotice && (
        <div className="privacy-notice" role="region" aria-label="Privacy notice">
          <p>{t.noticeText}</p>
          <button onClick={dismissNotice}>{t.noticeOk}</button>
        </div>
      )}

      {showTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};
