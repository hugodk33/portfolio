import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { AiFillGitlab } from 'react-icons/ai';
import { HiOutlineMail, HiArrowUp } from 'react-icons/hi';
import { SectionHeader } from './SectionHeader';

const contacts = [
  { label: 'GitHub', href: 'https://github.com/hugodk33', Icon: BsGithub },
  { label: 'GitLab', href: 'https://gitlab.com/hugodk33', Icon: AiFillGitlab },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/victor-hugo-amorim-arruda/',
    Icon: BsLinkedin,
  },
  { label: 'WhatsApp', href: 'https://wa.me/5585997313090?text=Hello!', Icon: BsWhatsapp },
  { label: 'Email', href: 'mailto:hugodk33@gmail.com', Icon: HiOutlineMail },
];

export const Portfolio = ({ t }) => (
  <section id="portfolio" className="section section--portfolio nebula grain">
    <div className="container">
      <SectionHeader index="03" title={t('portfolio.title')} meta={t('portfolio.meta')} />

      <div className="portfolio-grid">
        <figure className="window terminal-window">
          <div className="window-bar">
            <span className="window-dots" aria-hidden="true">
              <i /> <i /> <i />
            </span>
            <span className="window-tab">{t('portfolio.terminalTab')}</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt-user">hugo@portfolio</span>
              <span className="tok-punc">:</span>
              <span className="prompt-path">~</span>
              <span className="tok-punc">$</span>
              <span>{t('portfolio.command')}</span>
            </p>
            <p className="terminal-line term-dim">{t('portfolio.running')}</p>
            <p className="terminal-line term-dim">{t('portfolio.scanning')}</p>
            <p className="terminal-line term-ok">✓ {t('portfolio.found')}</p>
            <p className="terminal-line">
              <span className="term-warn">!</span>
              <span>
                {t('portfolio.statusLabel')}: {t('portfolio.statusValue')}
              </span>
            </p>
            <p className="terminal-line term-dim">{t('portfolio.next')}</p>
            <p className="terminal-line terminal-prompt">
              <span className="prompt-user">hugo@portfolio</span>
              <span className="tok-punc">:</span>
              <span className="prompt-path">~</span>
              <span className="tok-punc">$</span>
              <span className="caret" aria-hidden="true" />
            </p>
          </div>

          <figcaption className="editor-status">
            <span className="status-branch">⎇ main</span>
            <span className="status-ok">✓ build passing</span>
            <span className="editor-status-right" aria-hidden="true">
              <span>zsh</span>
            </span>
          </figcaption>
        </figure>

        <div className="portfolio-copy">
          <h3>{t('portfolio.heading')}</h3>
          <p>{t('portfolio.copy')}</p>

          <span className="aside-label">{t('portfolio.contact')}</span>
          <div className="contact-list">
            {contacts.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                <Icon aria-hidden="true" />
                {label}
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} {t('footer.rights')}</span>
        <span className="footer-sep" aria-hidden="true">/</span>
        <span>{t('footer.built')}</span>
        <a className="to-top" href="#inicio">
          {t('footer.top')}
          <HiArrowUp aria-hidden="true" />
        </a>
      </footer>
    </div>
  </section>
);
