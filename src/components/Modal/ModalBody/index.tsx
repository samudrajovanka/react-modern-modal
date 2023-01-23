import React from 'react';
import cx from 'classnames';

import { ModalBodyProps } from './types';

import './styles.css';

const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  style
}) => {
  return <div className={cx('modal__body', className)} style={style}>{children}</div>;
}

export default ModalBody;
