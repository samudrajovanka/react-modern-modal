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

      <Modal isOpen={isOpen} onClose={handleClose} backdropBlur {...args}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          rerum! Atque, molestias. Placeat nemo suscipit ipsa quos cum quo, quas
          sed obcaecati quidem, cumque aliquam voluptatibus, adipisci sint
          nesciunt eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem ipsa, ut hic porro, quidem recusandae pariatur
          natus quia voluptatum corporis tempora vero alias? Adipisci,
          exercitationem fugit? Atque amet minus dolores.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Add</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalExample;
