import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'
import { classNames } from '../../lib';
import { Mods } from '../../lib/classNames/classNames';


type StyleClasses = 'solid' | 'outline'
type AsTypes = 'btnDefault' | 'addImgLeft' | 'addImgRight' 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children?: ReactNode,
    src?: string,
    max?: boolean,
    as?: AsTypes,
    variant?: StyleClasses,
}




export const Button: FC<ButtonProps> = ({ className, variant= 'solid', as='btnDefault',  children, src, max= false, ...rest}) => {
    const variantStyles: Record<StyleClasses, string> = {
        solid: cls.solid,
        outline: cls.outline,
    }
    const classes = [
        variantStyles[variant],
    ]
    const mods: Mods = {}

    const btnDifferent: Record<AsTypes, JSX.Element> = {
        btnDefault:  ( <button className={classNames(cls.btn, {[cls.max]: max},classes)}>{children}</button>),
        addImgLeft:  ( <button className={classNames(cls.btn, {[cls.max]: max},classes)}> <img className={cls.btnImage} src={src} alt="" /> {children}</button>),
        addImgRight:  ( <button className={classNames(cls.btn, {[cls.max]: max},classes)}>{children}<img className={cls.btnImage} src={src} alt="" /></button>),
    }

    return (
        btnDifferent[as]
    )
}
