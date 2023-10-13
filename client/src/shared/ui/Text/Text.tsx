import React, { FC, ReactNode } from 'react'
import cls from './Text.module.scss'
import { classNames } from '../../lib/classNames/classNames';


type AsTypes = "h1" | "h2" | "p" | "span"
type SizeType = 12 | 14 | 16 | 28;
type FontWeightType = 400 | 600 | 700 | 800;
type ColorType = 'blue' | 'black' | 'gray';
type AlignType = "center" | "left" | "right";

interface TextProps {
  children: ReactNode,
  className?: string,
  as?: AsTypes,
  size?: SizeType,
  align?: AlignType,
  fw?: FontWeightType,
  color?: ColorType,
  max?: boolean,
  onClick?: (value?: any) => void;

}

export const Text: FC<TextProps> = ({ children,
  size = 14,
  fw = 400,
  as = "p",
  color = "black",
  className,
  align = 'left',
  onClick, }) => {


  const sizeClasses: Record<SizeType, string> = {
    12: cls.size12,
    14: cls.size14,
    16: cls.size16,
    28: cls.size28,
  }


  const colorClassses: Record<ColorType, string> = {
    gray: cls.gray,
    blue: cls.blue,
    black: cls.black,
  }


  const fWeightClasses: Record<FontWeightType, string> = {
    400: cls.fWeigh400,
    600: cls.fWeight600,
    700: cls.fWeight700,
    800: cls.fWeight800,
  }

  const alignItemsClasses: Record<AlignType, string> = {
    center: cls.center,
    left: cls.left,
    right: cls.right,
  }


  const classes = [
    size && sizeClasses[size],
    color && colorClassses[color],
    align && alignItemsClasses[align],
    fw && fWeightClasses[fw]
  ]



  const getTag: Record<AsTypes, JSX.Element> = {
    h1: (<h1 onClick={onClick} className={classNames(cls.text, {}, classes)}>
      {children}
    </h1>),
    h2: (<h2 onClick={onClick} className={`${sizeClasses[size]}  ${colorClassses[color]} `}>
      {children}
    </h2>),
    p: (<p onClick={onClick} className={`${sizeClasses[size]}  ${colorClassses[color]} `}>
      {children}
    </p>),
    span: (<span onClick={onClick} className={`${sizeClasses[size]}  ${colorClassses[color]} `}>
      {children}
    </span>),

  };
  return getTag[as];
}
