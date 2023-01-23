import React from 'react';
import CloseIcon from '../../../../src/components/Icon/Close';

type ButtonCloseProps = {
  onClick: () => void;
};

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="close button"
      onClick={onClick}
      style={{
        padding: 0,
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#324dfc',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        color: 'white'
      }}
    >
      <CloseIcon />
    </button>
  );
}

export default ButtonClose;
