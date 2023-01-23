import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-modern-modal';
import Props from '../Props';

const PropsModal = () => {
  return <Props components={[Modal, ModalHeader, ModalBody, ModalFooter]} />;
}

export default PropsModal;
