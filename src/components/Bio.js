import React from 'react';
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineDownload } from 'react-icons/hi';
import { SectionHeader } from './SectionHeader';
import { TechChip } from './tech';
import huguim from '../img/eu.png';
import curriculo from '../assets/curriculo-victor-hugo.pdf';

const groups = [
  {
    key: 'backend',
    color: 'var(--tok-type)',
    techs: ['node', 'csharp', 'dotnet', 'express', 'nest', 'adonis', 'mysql'],
  },
  {
    key: 'frontend',
    color: 'var(--tok-var)',
    techs: ['react', 'next', 'typescript', 'javascript', 'tailwind', 'vue', 'angular'],
  },
  {
    key: 'infra',
    color: 'var(--tok-key)',
    techs: ['aws', 'docker', 'git', 'devops'],
  },
  {
    key: 'cms',
    color: 'var(--tok-str)',
    techs: ['wordpress', 'php', 'html', 'css', 'jquery'],
  },
];

const socials = {
  github: 'https://github.com/hugodk33',
  linkedin: 'https://www.linkedin.com/in/victor-hugo-amorim-arruda/',
  whatsapp: 'https://wa.me/5585997313090?text=Hello!',
  email: 'mailto:hugodk33@gmail.com',
};

export const Bio = ({ t, language }) => {
  const principles =
    language === 'pt'
      ? ['SOLID', 'Arquitetura limpa', 'Camadas', 'APIs REST', 'Testes', 'Manutenibilidade']
      : ['SOLID', 'Clean architecture', 'Layering', 'REST APIs', 'Testing', 'Maintainability'];

  return (
    <section id="bio" className="section section--bio">
      <div className="container">
        <SectionHeader index="01" title={t('bio.title')} meta={t('bio.meta')} />

        <div className="bio-grid">
          <aside className="bio-aside">
            <figure className="portrait">
              <img src={huguim} alt={t('bio.portraitAlt')} loading="lazy" />
              <figcaption>{t('bio.portraitCaption')}</figcaption>
            </figure>

            <dl className="facts">
              <div>
                <dt>{t('bio.factsBase')}</dt>
                <dd>{t('bio.factsBaseValue')}</dd>
              </div>
              <div>
                <dt>{t('bio.factsFocus')}</dt>
                <dd>{t('bio.factsFocusValue')}</dd>
              </div>
              <div>
                <dt>{t('bio.factsSince')}</dt>
                <dd>{t('bio.factsSinceValue')}</dd>
              </div>
              <div>
                <dt>{t('bio.factsStatus')}</dt>
                <dd>
                  <span className="status-dot" aria-hidden="true" />
                  {t('bio.factsStatusValue')}
                </dd>
              </div>
            </dl>

            <div className="aside-block">
              <span className="aside-label">{t('bio.social')}</span>
              <div className="social">
                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                  <BsGithub aria-hidden="true" /> GitHub
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin aria-hidden="true" /> LinkedIn
                </a>
                <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer">
                  <BsWhatsapp aria-hidden="true" /> WhatsApp
                </a>
                <a href={socials.email}>
                  <HiOutlineMail aria-hidden="true" /> Email
                </a>
              </div>
            </div>

            <a
              className="btn btn-ghost cv-button"
              href={curriculo}
              download="Hugo-Amorim-CV.pdf"
            >
              <HiOutlineDownload aria-hidden="true" />
              {t('bio.cv')}
            </a>
          </aside>

          <div className="bio-main">
            <p className="bio-lede">{t('bio.lede')}</p>

            <div className="prose">
              <p>{t('bio.p1')}</p>
              <p>{t('bio.p2')}</p>
              <p>{t('bio.p3')}</p>
            </div>

            <div className="principles">
              <span className="aside-label">{t('bio.principles')}</span>
              <div className="principles-list">
                {principles.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-head">
              <span className="aside-label">{t('bio.skillsTitle')}</span>
              <span className="skills-count" aria-hidden="true">
                {groups.reduce((total, group) => total + group.techs.length, 0)} {t('bio.items')}
              </span>
            </div>

            <div className="skill-grid">
              {groups.map((group) => (
                <div
                  className="skill-card"
                  key={group.key}
                  style={{ '--group-color': group.color }}
                >
                  <h3>
                    {t(`bio.${group.key}`)}
                    <span aria-hidden="true">{String(group.techs.length).padStart(2, '0')}</span>
                  </h3>
                  <div className="skill-list">
                    {group.techs.map((tech) => (
                      <TechChip key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
