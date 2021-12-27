import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';
import { findByTestAtribute } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Logo {...props} />);
    return component;
}


describe('Logo Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('should render without errors', () => {
        const wrapper = findByTestAtribute(component, 'logoComponent')
        expect(wrapper.length).toBe(1);
    });
    it('should render a logo without errors', () => {
        const logo = findByTestAtribute(component, 'logoIMG')
        expect(logo.length).toBe(1);
    });
    it('should render a title without errors', () => {
        const title = findByTestAtribute(component, 'title')
        expect(title.length).toBe(1);
    });
});
