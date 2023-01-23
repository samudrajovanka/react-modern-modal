# react-modern-modal

> React Modern Modal is a simple, lightweight, and modern modal component for React.

[![NPM](https://img.shields.io/npm/v/react-modern-modal.svg)](https://www.npmjs.com/package/react-modern-modal)
[![npm](https://img.shields.io/npm/dw/react-modern-modal)](https://standardjs.com)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Component Documentation](#component-documentation)

## Installation

```bash
npm install --save react-modern-modal
yarn add react-modern-modal
```

## Usage

Simple use `react-modern-modal` on your react app

```tsx
import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-modern-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={handleClose}>
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
          <button onClick={handleClose}>Close</button>
          <button onClick={handleClose}>Add</button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
```

You can find more examples in [Component Documentation](#component-documentation) section.

## Component Documentation

You can see the component documentation [here](https://react-modern-modal.netlify.app/?path=/docs/components-modal--modal) with list of props and examples.
