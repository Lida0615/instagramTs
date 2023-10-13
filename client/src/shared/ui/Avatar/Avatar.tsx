import React, { FC, ImgHTMLAttributes } from 'react'
import cls from './Avatar.module.scss'


type ImageType =  'small' | 'follow' | 'message' | 'stories' | 'profile'


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    classname?: string;
    src?: string;
    variant?: ImageType
    
}

export  const Avatar:FC<AvatarProps> = ({variant, src, ...rest}) => {
    const avatarSizeClasses: Record<ImageType, string> = {
        small: cls.small,
        follow: cls.follow,
        message: cls.message,
        stories: cls.stories,
        profile: cls.profile,
    }
    console.log(avatarSizeClasses);
    
  return (
    <>
    <img className={avatarSizeClasses[variant]}  src={src} {...rest} /></>
  )
}

