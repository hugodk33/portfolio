import React from 'react';

/**
 * Shared section heading: index, title, technical meta label and a hairline rule.
 * Keeps every section aligned to the same rhythm.
 */
export const SectionHeader = ({ index, title, meta }) => (
  <header className="section-head">
    <div className="section-head-main">
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
    </div>
    {meta ? <span className="section-meta">{meta}</span> : null}
    <span className="section-rule" aria-hidden="true" />
  </header>
);
