import React from 'react'
import style from './Button.module.css'
function CustomButton(props) {
    const {text,onClick,disabled} = props;
  return (
    <button className={disabled?style.disabled:style.buttons} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default CustomButton;