import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-modern-modal';

import Button from '../../Button/Button';

const ModalExample = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={handleClose} noPadding noCloseButton {...args}>
        <ModalHeader
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            color: '#5954ff',
            backgroundColor: 'white',
            padding: 8,
            borderRadius: 4,
            fontSize: '1rem'
          }}
        >
          <a href="https://unsplash.com/@raouldroog" style={{ color: '#5954ff', textDecoration: 'none' }}>
            Raoul Droog
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/" style={{ color: '#5954ff', textDecoration: 'none' }}>
            Unsplash
          </a>
        </ModalHeader>
        <ModalBody>
          <img
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="cat"
            width="100%"
            height="500px"
            style={{
              objectFit: 'cover'
            }}
          />
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalExample;
