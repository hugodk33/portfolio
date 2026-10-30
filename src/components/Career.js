import React, { useState } from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { SectionHeader } from './SectionHeader';
import { TechChip } from './tech';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Paragraphs = ({ text }) => (
  <>
    {text.split('<br />').map((part, index) => (
      <p key={index}>{part}</p>
    ))}
  </>
);

export const Career = ({ t, timeline }) => {
  const [actualYear, setActualYear] = useState(0);
  const [actualService, setActualService] = useState(0);

  const year = timeline.carrer[actualYear];
  const service = year.services[actualService];

  const selectYear = (index) => {
    setActualYear(index);
    setActualService(0);
  };

  return (
    <section id="carreira" className="section section--career nebula-soft">
      <div className="container">
        <SectionHeader index="02" title={t('carreira.title')} meta={t('carreira.meta')} />

        <div className="year-tabs" role="tablist" aria-label={t('carreira.yearLabel')}>
          {timeline.carrer.map((entry, index) => (
            <button
              key={entry.year}
              type="button"
              role="tab"
              aria-selected={index === actualYear}
              className={`year-tab${index === actualYear ? ' is-active' : ''}`}
              onClick={() => selectYear(index)}
            >
              <span className="year-dot" aria-hidden="true" />
              {entry.year}
            </button>
          ))}
        </div>

        <div className="career-layout">
          <aside className="commit-list" aria-label={t('carreira.entriesLabel')}>
            {year.services.map((entry, index) => (
              <button
                key={`${entry.title}-${index}`}
                type="button"
                className={`commit${index === actualService ? ' is-active' : ''}`}
                aria-pressed={index === actualService}
                onClick={() => setActualService(index)}
              >
                <span className="commit-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="commit-title">{entry.title}</span>
                <span className="commit-role">{entry.service}</span>
              </button>
            ))}
          </aside>

          <article className="window career-card">
            <div className="window-bar">
              <span className="window-dots" aria-hidden="true">
                <i /> <i /> <i />
              </span>
              <span className="window-tab">
                <span className="file-badge file-badge--md">MD</span>
                {slugify(service.title)}.md
              </span>
              <span className="window-actions" aria-hidden="true">
                {year.year}
              </span>
            </div>

            <div className="career-body">
              <header className="career-head">
                <h3 className="career-title">{service.title}</h3>
                <p className="career-role">{service.service}</p>
              </header>

              <div className="career-block">
                <span className="career-label">{t('carreira.stack')}</span>
                <div className="skill-list">
                  {service.techs.map((tech) => (
                    <TechChip key={tech} tech={tech} />
                  ))}
                </div>
              </div>

              {service.challenge ? (
                <div className="career-block">
                  <span className="career-label">{t('carreira.challenge')}</span>
                  <p className="challenge">{service.challenge}</p>
                </div>
              ) : null}

              <div className="career-block">
                <span className="career-label">{t('carreira.notes')}</span>
                <div className="career-desc">
                  <Paragraphs text={service.description} />
                </div>
              </div>

              {service.link ? (
                <a
                  className="btn btn-ghost career-link"
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorldWww aria-hidden="true" />
                  {t('carreira.visit')}
                </a>
              ) : null}
            </div>

            <div className="editor-status">
              <span className="status-branch">⎇ career/{year.year}</span>
              <span>
                {year.services.length} {t('carreira.entriesLabel').toLowerCase()}
              </span>
              <span className="editor-status-right" aria-hidden="true">
                <span>Markdown</span>
                <span>Ln 1, Col 1</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
