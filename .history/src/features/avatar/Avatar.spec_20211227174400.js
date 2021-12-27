import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';
import { findByTestAtribute } from '../../../Utils/index';


const setUp = (props = {}) => {
    const component = shallow(<Avatar {...props} />);
    return component;
}


describe('Avatar Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('should render avatar without errors', () => {
        const container = findByTestAtribute(component, 'appAvatar');
        expect(container.length).toEqual(1)
    });

});