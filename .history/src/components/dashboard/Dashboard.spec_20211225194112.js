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