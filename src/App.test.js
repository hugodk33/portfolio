import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the hero and switches language', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hugo Amorim');
  expect(screen.getByRole('link', { name: /^career$/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /download cv/i })).toHaveLength(2);

  fireEvent.click(screen.getByRole('button', { name: 'PT' }));

  expect(screen.getByRole('link', { name: /ver carreira/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /carreira/i })).toBeInTheDocument();
});
