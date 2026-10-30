import '@testing-library/jest-dom';

// The page respects reduced motion; keep tests deterministic and avoid the
// ASCII animation scheduling state updates after a test has finished.
window.matchMedia = window.matchMedia || ((query) => ({
  matches: true,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}));

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver;
