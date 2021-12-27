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
import Modal from 'react-modal';

jest.spyOn(Modal, "setAppElement")
    .mockImplementation(param => console.log(`setAppElement:'${param}'`));

describe('Dashboard', () => {
    it('should use modal', () => {
        Modal.setAppElement(document.getElementById('#root'))
        if (process.env.NODE_ENV !== 'test' || null)
            Modal.setAppElement(document.getElementById('#root'))

    });
}
)
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}


describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp()
    })
    it('should render header without errors', () => {
        const wrapper = findByTestAtribute(component, 'appHeader')
        expect(wrapper.length).toBe(1);

    });

});