// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders reddit client link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/reddit client/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

describe('App', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('renders a <Header /> component', () => {
    expect(screen.getByRole('header')).toBeInTheDocument();
  });

  it('renders a <Posts /> component', () => {
    expect(screen.getByLabelText('posts')).toBeInTheDocument();
  });

  it('renders a <Subreddits /> component', () => {
    expect(screen.getByLabelText('subreddits')).toBeInTheDocument();
  });
});