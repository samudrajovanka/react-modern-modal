import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-modern-modal';

import Button from '../../Button/Button';
import RadioGroup from '../../RadioGroup/RadioGroup';

const ModalExample = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [titlePosition, setTitlePosition] = useState('bottom');

  const handleChange = e => {
    setTitlePosition(e.target.value);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <RadioGroup
        menu={[
          { value: 'top', id: 'top_title_position' },
          { value: 'bottom', id: 'bottom_title_position' },
        ]}
        name="titlePosition"
        value={titlePosition}
        handleChange={handleChange}
      />

      <Button onClick={handleOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={handleClose} {...args}>
        <ModalHeader titlePosition={titlePosition}>Modal Title</ModalHeader>
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
