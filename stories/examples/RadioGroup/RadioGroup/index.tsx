import React from 'react'

type Menu = {
  label?: string,
  id?: string;
  value: string
}

type RadioGroupProps = {
  menu: Menu[];
  name: string,
  value: string;
  handleChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ menu, name, value, handleChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        marginBottom: 16,
      }}
      // onChange={handleChange}
    >
      {menu.map(item => (
        <div key={item.value}>
          <input
            type="radio"
            id={item.id ?? item.value}
            value={item.value}
            name={name}
            checked={value === item.value}
            onChange={handleChange}
          />
          <label htmlFor={item.id ?? item.value}>
            {item.label ?? item.value}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioGroup;
