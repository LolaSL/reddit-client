import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reddit client link', () => {
  render(<App />);
  const linkElement = screen.getByText(/reddit client/i);
  expect(linkElement).toBeInTheDocument();
});
