import React from 'react';
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineBriefcase,
  HiOutlineFolderOpen,
} from 'react-icons/hi';
import logobranca from '../assets/logo/logo-branca-01.svg';

const links = [
  { id: 'inicio', key: 'nav.home', Icon: HiOutlineHome },
  { id: 'bio', key: 'nav.bio', Icon: HiOutlineUserCircle },
  { id: 'carreira', key: 'nav.timeline', Icon: HiOutlineBriefcase },
  { id: 'portfolio', key: 'nav.portfolio', Icon: HiOutlineFolderOpen },
];

/**
 * VS Code-style activity bar. It is the one persistent piece of chrome on the
 * page: neutral, compact, and always showing where the visitor is.
 */
export const Rail = ({ active, language, onLanguageChange, t }) => (
  <nav className="rail" aria-label="Sections">
    <a className="rail-logo" href="#inicio" aria-label="Hugo Amorim — home">
      <img src={logobranca} alt="" />
    </a>

    <div className="rail-nav">
      {links.map(({ id, key, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`rail-link${active === id ? ' is-active' : ''}`}
          aria-label={t(key)}
          aria-current={active === id ? 'true' : undefined}
        >
          <Icon aria-hidden="true" />
          <span>{t(key)}</span>
        </a>
      ))}
    </div>

    <div className="rail-bottom">
      <div className="lang-switch" role="group" aria-label="Language">
        <button
          type="button"
          className={language === 'en' ? 'is-active' : ''}
          aria-pressed={language === 'en'}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={language === 'pt' ? 'is-active' : ''}
          aria-pressed={language === 'pt'}
          onClick={() => onLanguageChange('pt')}
        >
          PT
        </button>
      </div>
    </div>
  </nav>
);
