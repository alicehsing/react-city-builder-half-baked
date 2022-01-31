import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to beautiful', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to beautiful/i);
  expect(linkElement).toBeInTheDocument();
});