import React from 'react';
import cx from 'classnames';

import { ModalFooterProps } from './types';

import './styles.css';

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  justify = 'end',
  className,
  style,
}) => {
  return (
    <footer
      className={cx(`modal__footer modal__footer--${justify}`, className)}
      style={style}
    >
      {children}
    </footer>
  );
};

export default ModalFooter;
