import React from 'react'
import style from './Input.module.css'
function CustomInput(props) {
    const {placeholder,onChange,value} = props;
  return (
   <input className={style.input} type='text' placeholder={placeholder} onChange={onChange} value={value} required/>
  )
}

export default CustomInput;