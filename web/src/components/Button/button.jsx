import React from 'react';

const CustomButton = ({
  onClick,
  title,
  color,
  className = '',
}) => {
  return (
    <button
      onClick={onClick} 
      style={{ backgroundColor: color }}
      className={className}
    >
      {title}
    </button>
  );
};

export default CustomButton;