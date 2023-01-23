import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: Reeact.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      style={{
        height: 44,
        width: 100,
        borderRadius: 8,
        backgroundColor: '#324dfc',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
