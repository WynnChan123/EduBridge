import React from 'react'

const InputBox = ({
  placeholder,
  value,
  onChange,
  className,
  type="text"
}) => {
  return (
    <input
      type = { type }
      placeholder = { placeholder}
      value = { value }
      onChange = { onChange }
      className={ className }
    />
  )
}

export default InputBox;
