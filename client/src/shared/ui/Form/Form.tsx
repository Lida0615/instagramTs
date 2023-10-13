import React, { FC, FormEventHandler, FormHTMLAttributes, ReactNode } from 'react'
import cls from './Form.module.scss'

interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
    children?: ReactNode,
    onSubmit: () => void;

}

export const Form:  FC<FormProps> = ({children,onSubmit, ...rest}) => {
  return (
    <form onSubmit={onSubmit} noValidate>{children}</form>
  )
}

