import '@testing-library/jest-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true

})

global.shallow = shallow
global.render = render
global.mount = mount
console.error = message => {
    throw new Error(message)
}
