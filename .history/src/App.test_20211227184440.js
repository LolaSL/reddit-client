// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders reddit client link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/reddit client/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAtribute } from '../../../Utils/index';



const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
}
describe('App', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  });

  it('renders Header component', () => {
    const wrapper = findByTestAtribute(component, 'appHeader')
    expect(wrapper.length).toBe(1);
  });

  it('renders a Home component', () => {
    const wrapper = findByTestAtribute(component, 'posts')
    expect(wrapper.length).toBe(1);
  });

  it('renders a Subreddits component', () => {
    const wrapper = findByTestAtribute(component, 'subreddits')
    expect(wrapper.length).toBe(1);
  });
});