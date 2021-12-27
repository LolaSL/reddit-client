import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { findByTestAtribute } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Card {...props} />);
    return component;
}


describe('Card Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('should render without errors', () => {
        const wrapper = findByTestAtribute(component, 'appCard')
        expect(wrapper.length).toBe(1);
    });
});