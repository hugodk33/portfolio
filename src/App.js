import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import translations from './i18n/translations';
import career from './career.json';
import careerEn from './career-en.json';
import { Rail } from './components/Rail';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Career } from './components/Career';
import { Portfolio } from './components/Portfolio';
import { LogoIntro } from './components/LogoIntro';

const SECTIONS = ['inicio', 'bio', 'carreira', 'portfolio'];
const INTRO_KEY = 'portfolio-intro-seen';

function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (new URLSearchParams(window.location.search).get('intro') === '1') return true;
  if (window.location.hash && window.location.hash !== '#inicio') return false;

  try {
    return window.sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch (error) {
    return false;
  }
}

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('portfolio-language') || 'en';
  });
  const [activeSection, setActiveSection] = useState('inicio');
  const [showIntro, setShowIntro] = useState(shouldPlayIntro);

  const timeline = language === 'pt' ? career : careerEn;
  const t = (key) => key.split('.').reduce((obj, part) => obj?.[part], translations[language]) ?? key;

  const finishIntro = useCallback(() => {
    setShowIntro(false);
    try {
      window.sessionStorage.setItem(INTRO_KEY, '1');
    } catch (error) {
      // Private browsing can block sessionStorage; the intro still closes.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {showIntro && <LogoIntro language={language} onDone={finishIntro} />}

      <a className="skip-link" href="#inicio">
        Skip to content
      </a>

      <Rail
        active={activeSection}
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />

      <main className="Main">
        <Hero t={t} />
        <Bio t={t} language={language} />
        <Career key={language} t={t} timeline={timeline} />
        <Portfolio t={t} />
      </main>
    </div>
  );
}

export default App;
