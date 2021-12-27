// import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
// import { store } from '../../store/index.js';
// import Header from './Header';

// describe('Header component', () => {
//     it('matches the snapshot', () => {
//         const tree = renderer
//             .create(
//                 <Provider store={store}>
//                     <Header />
//                 </Provider>,
//             )
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAtribute } from '../../../Utils/index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}


describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('should render avatar without errors', () => {
        const wrapper = findByTestAtribute(component, 'appHeader')
        expect(wrapper.length).toBe(1);

    });

});