import React from 'react';
import * as ReactDOM from 'react-dom';

import { Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

describe('Modal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Modal isOpen={false} onClose={() => {}}>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </Modal>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
