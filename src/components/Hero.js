import React, { useEffect, useState } from 'react';
import { HiOutlineDownload, HiArrowRight } from 'react-icons/hi';
import LogoAnimaAsci from '../LOGO-ASCI/logoasci.json';
import curriculo from '../assets/curriculo-victor-hugo.pdf';

const codeLines = [
  <>
    <span className="tok-key">const</span> <span className="tok-var">hugo</span>{' '}
    <span className="tok-punc">=</span> <span className="tok-punc">{'{'}</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">role</span>
    <span className="tok-punc">:</span>{' '}
    <span className="tok-str">&quot;Full Stack Developer&quot;</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">focus</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
    <span className="tok-str">&quot;Node.js&quot;</span>
    <span className="tok-punc">,</span>{' '}
    <span className="tok-str">&quot;C#&quot;</span>
    <span className="tok-punc">,</span>{' '}
    <span className="tok-str">&quot;.NET&quot;</span>
    <span className="tok-punc">]</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">frontend</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
    <span className="tok-str">&quot;React&quot;</span>
    <span className="tok-punc">,</span>{' '}
    <span className="tok-str">&quot;Next.js&quot;</span>
    <span className="tok-punc">]</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">principles</span>
    <span className="tok-punc">:</span> <span className="tok-punc">[</span>
  </>,
  <>
    {'    '}
    <span className="tok-str">&quot;SOLID&quot;</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'    '}
    <span className="tok-str">&quot;Clean Architecture&quot;</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-punc">]</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">since</span>
    <span className="tok-punc">:</span> <span className="tok-num">2019</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">location</span>
    <span className="tok-punc">:</span>{' '}
    <span className="tok-str">&quot;Fortaleza, BR&quot;</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    {'  '}
    <span className="tok-var">status</span>
    <span className="tok-punc">:</span>{' '}
    <span className="tok-str">&quot;available&quot;</span>
    <span className="tok-punc">,</span>
  </>,
  <>
    <span className="tok-punc">{'}'}</span>
    <span className="tok-punc">;</span>
  </>,
  <>&nbsp;</>,
  <>
    <span className="tok-key">export</span> <span className="tok-key">default</span>{' '}
    <span className="tok-var">hugo</span>
    <span className="tok-punc">;</span>
  </>,
];

export const Hero = ({ t }) => {
  const [frame, setFrame] = useState(0);
  const lastFrame = LogoAnimaAsci.logo.length - 1;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setFrame(lastFrame);
      return undefined;
    }

    if (frame === lastFrame) {
      const pause = setTimeout(() => setFrame(0), 4000);
      return () => clearTimeout(pause);
    }

    const tick = setTimeout(() => setFrame((value) => value + 1), 70);
    return () => clearTimeout(tick);
  }, [frame, lastFrame]);

  return (
    <section id="inicio" className="hero nebula grain">
      <pre className="hero-ascii" aria-hidden="true">
        {LogoAnimaAsci.logo[frame].join('\n')}
      </pre>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t('hero.eyebrow')}</p>

          <h1 className="display">
            Hugo <span>Amorim</span>
          </h1>

          <p className="role" aria-label={t('hero.fullstackLabel')}>
            <span className="tok-punc">&lt;</span>
            <span className="tok-type">FullStack</span>
            <span className="tok-fn">Developer</span>
            <span className="tok-punc"> /&gt;</span>
          </p>

          <p className="lede">{t('hero.lede')}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#carreira">
              {t('hero.career')}
              <HiArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#bio">
              {t('hero.bio')}
            </a>
            <a className="btn btn-quiet" href={curriculo} download="Hugo-Amorim-CV.pdf">
              <HiOutlineDownload aria-hidden="true" />
              {t('hero.cv')}
            </a>
          </div>

          <ul className="hero-meta">
            <li>
              <span className="status-dot" aria-hidden="true" />
              {t('hero.status')}
            </li>
            <li>{t('hero.location')}</li>
            <li>{t('hero.since')}</li>
          </ul>
        </div>

        <div className="hero-editor">
          <figure className="window" aria-label="Code editor showing Hugo's developer profile">
            <div className="window-bar">
              <span className="window-dots" aria-hidden="true">
                <i /> <i /> <i />
              </span>
              <span className="window-tab">
                <span className="file-badge">TS</span>
                developer.ts
              </span>
            </div>

            <div className="editor-body">
              <div className="gutter" aria-hidden="true">
                {codeLines.map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <pre className="code">{codeLines.map((line, index) => <span className="code-line" key={index}>{line}</span>)}</pre>
            </div>

            <figcaption className="editor-status">
              <span className="status-branch">⎇ main</span>
              <span className="status-ok">✓ build passing</span>
              <span className="editor-status-right" aria-hidden="true">
                <span>UTF-8</span>
                <span>Ln {codeLines.length}, Col 1</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
