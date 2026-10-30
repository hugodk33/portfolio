import React, { useCallback, useEffect, useRef, useState } from 'react';
import logoAscii from '../LOGO-ASCI/logoasci.json';

const FRAME_MS = 10;
const HOLD_MS = 700;
const LEAVE_MS = 420;
const SKIP_LEAVE_MS = 240;

/**
 * Opening sequence built from Hugo's original 114-frame ASCII knight.
 * It runs once per session, follows the original 10 ms cadence and can be
 * skipped with Esc, the on-screen control, or the ?intro=1 debug flag.
 */
export const LogoIntro = ({ language, onDone }) => {
  const frames = logoAscii.logo;
  const lastFrame = frames.length - 1;
  const [frame, setFrame] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);

  const finish = useCallback((skipped = false) => {
    if (finished.current) return;
    finished.current = true;
    setLeaving(true);
    window.setTimeout(onDone, skipped ? SKIP_LEAVE_MS : LEAVE_MS);
  }, [onDone]);

  useEffect(() => {
    if (frame >= lastFrame) {
      const hold = window.setTimeout(() => finish(), HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    const tick = window.setTimeout(() => setFrame((value) => value + 1), FRAME_MS);
    return () => window.clearTimeout(tick);
  }, [frame, lastFrame, finish]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') finish(true);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [finish]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('intro-lock');
    return () => root.classList.remove('intro-lock');
  }, []);

  const progress = `${Math.round(((frame + 1) / frames.length) * 100)}%`;
  const isComplete = frame === lastFrame;

  return (
    <div
      className={`intro${leaving ? ' is-leaving' : ''}${isComplete ? ' is-complete' : ''}`}
      role="presentation"
      onClick={() => finish(true)}
    >
      <div className="intro-inner">
        <div className="intro-mark-wrap">
          <pre className="intro-mark" aria-hidden="true">
            {frames[frame].join('\n')}
          </pre>
        </div>

        <p className="intro-name">Hugo Amorim</p>
        <p className="intro-role">Full Stack Developer</p>

        <div className="intro-progress" aria-hidden="true">
          <span style={{ width: progress }} />
        </div>

        <button
          type="button"
          className="intro-skip"
          autoFocus
          onClick={(event) => {
            event.stopPropagation();
            finish(true);
          }}
        >
          {language === 'pt' ? 'Pular intro' : 'Skip intro'}
          <span aria-hidden="true"> · esc</span>
        </button>
      </div>
    </div>
  );
};
