import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { Modal as ModalComponent, ModalHeader, ModalBody, ModalFooter } from '../src';
import { ModalProps } from '../src/components/Modal/Modal/types';

import Button from './example/Button/Button';
import RadioGroup from './examples/RadioGroup/RadioGroup';
import ButtonClose from './example/ButtonClose/ButtonClose';

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  parameters: {
    docs: {
      description: {
        component:
          'Add modern dialog modals to your page according to your needs.',
      },
    },
  }
};

export default meta;

export { default as Modal } from './examples/Modal/Modal/story';
export { default as Size } from './examples/Modal/Size/story';
export { default as Position } from './examples/Modal/Position/story';
export { default as WithoutCloseButton } from './examples/Modal/WithoutCloseButton/story';
export { default as BackdropBlur } from './examples/Modal/BackdropBlur/story';
export { default as ScrollBehaviour } from './examples/Modal/ScrollBehaviour/story';
export { default as NoPadding } from './examples/Modal/NoPadding/story';
export { default as CustomCloseButton } from './examples/Modal/CustomCloseButton/story';
export { default as HeaderTitlePosition } from './examples/Modal/HeaderTitlePosition/story';
export { default as Props } from './examples/Modal/Props';
