import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const messages = {
  en: {
    code: "404",
    title: "Page not found",
    subtitle:
      "The page you're looking for doesn't exist or has been moved.",
    home: "Back to Home",
  },
  es: {
    code: "404",
    title: "Página no encontrada",
    subtitle: "La página que buscas no existe o ha sido movida.",
    home: "Volver al inicio",
  },
};

export const NotFound = () => {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("portfolio-lang");
    return stored === "es" ? "es" : "en";
  });

  const t = messages[lang];

  return (
    <div className="nf-wrap">
      <div className="site-header nf-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">Daniel Mongeote Tlachy</a>
        </nav>
        <div className="header-icons">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label={
              lang === "en" ? "Switch to Spanish" : "Switch to English"
            }
            aria-pressed={lang === "es"}
          >
            {lang === "en" ? "SPA" : "ENG"}
          </button>
        </div>
      </div>

      <main className="nf-main">
        <p className="nf-code">{t.code}</p>
        <h1 className="nf-title">{t.title}</h1>
        <p className="nf-subtitle">{t.subtitle}</p>
        <a className="nf-home" href="/">
          <ArrowLeft size={16} />
          {t.home}
        </a>
      </main>
    </div>
  );
};
