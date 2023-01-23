import ModalExample from '.';

import ModalExampleRaw from '!!raw-loader!.';

ModalExample.parameters = {
  docs: {
    source: {
      code: ModalExampleRaw,
      language: 'tsx',
      type: 'auto',
    },
  },
};

ModalExample.args = {
  size: 'md',
  position: 'center',
  scrollBehaviour: 'none',
  noCloseButton: false,
  preventClose: false,
  noPadding: false,
  backdropBlur: false,
}

ModalExample.argTypes = {
  size: {
    description: 'The size of the modal',
    type: { name: 'string' },
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg', 'fullscreen'],
    },
    table: {
      type: { summary: 'sm | md | lg | fullscreen' },
      defaultValue: { summary: 'md' },
    },
  },
  position: {
    description: 'The position of the modal from window',
    type: { name: 'string' },
    control: {
      type: 'select',
      options: ['top', 'center'],
    },
    table: {
      type: { summary: 'top | center' },
      defaultValue: { summary: 'center' },
    },
  },
  backdropColor: {
    description: 'Attribute to change color of backdrop overlay',
    type: { name: 'string' },
    control: {
      type: 'color',
    },
  },
  backdropBlur: {
    description: 'Attribute to make the backdrop modal blured',
    type: { name: 'boolean' },
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false },
    },
  },
  noCloseButton: {
    description: 'Attribute to hide the close button',
    type: { name: 'boolean' },
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false },
    },
  },
  scrollBehaviour: {
    description: 'Attribute to change the scroll behaviour of the modal',
    type: { name: 'string' },
    control: {
      type: 'select',
      options: ['none', 'inside', 'outside'],
    },
    table: {
      type: { summary: 'none | inside | outside' },
      defaultValue: { summary: 'none' },
    },
  },
  preventClose: {
    description: 'Attribute to prevent close the modal from backdrop click and esc key',
    type: { name: 'boolean' },
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false },
    },
  },
  noPadding: {
    description: 'Attribute to remove the padding of the modal',
    type: { name: 'boolean' },
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'bool' },
      defaultValue: { summary: false },
    },
  },
};

export default ModalExample;
