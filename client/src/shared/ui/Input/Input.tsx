import React, { FC, InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  type: string,
  placeholder?: string,
  name?: string,
  value?: string,
  onChange: () => void

}


const Input: FC<InputProps> = ({type='text', placeholder, name, value,onChange}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    
    </>
  )
}

export default Input