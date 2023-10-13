import React, { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react'
import cls from './FollowBtn.module.scss'
import { classNames } from '../../../shared/lib'


type StyleClasses = 'follow' | 'unfollow'

interface FollowBtmProps extends ButtonHTMLAttributes<HTMLButtonElement> {

  className?: string,
 
}


export const FollowBtn: FC<FollowBtmProps> = () => {
  const [follow, setFollow] = useState<boolean>(false)

  const onFollow = () => {
   setFollow(!follow)
  }
 

  
  
  return (
    <>
      {follow ? (<button onClick={onFollow} className={classNames(cls.btn,{}, [cls.follow])}> Follow</button>)
      :(<button  onClick={onFollow}  className={classNames(cls.btn,{}, [cls.unfollow])}> unFollow</button>)
      }
    </>
  )
}
