import React from 'react';
import cx from 'classnames';

import { ModalHeaderProps } from './types';

import './styles.css';

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  titlePosition = 'bottom',
  align = 'center',
  isRegular,
  className,
  style,
}) => {
  return (
    <header
      className={cx(
        'modal__header',
        {
          [`modal__header--title-pos-${titlePosition}`]: titlePosition,
          [`modal__header--title-alg-${align}`]: align,
          [`modal__header--regular`]: isRegular,
        },
        className
      )}
      style={style}
    >
      {typeof children === 'string' ? <h3>{children}</h3> : children}
    </header>
  );
};

export default ModalHeader;
