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

export default ModalExample;
