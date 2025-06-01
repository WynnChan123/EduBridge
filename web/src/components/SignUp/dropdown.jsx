import React from 'react'

const DropDownMenu = ({
  className,
  color,
  onChange,
  value,
}) => {
  return (
    <
      select className = {className} 
      style = {{backgroundColor : color}} 
      onChange = { onChange }
      value={ value || ''}
    >
        <option value="" disabled>Select Role</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Admin">Admin</option>
    </select>
  )
}

export default DropDownMenu;
