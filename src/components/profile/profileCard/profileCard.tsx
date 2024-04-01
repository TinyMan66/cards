import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Avatar, Typography } from '@/components'
import clsx from 'clsx'

import s from './profileCard.module.scss'

type ProfileCardProps = {
  avatar: string
  children?: ReactNode
  email?: string
  name?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export const ProfileCard = ({
  avatar,
  children,
  className,
  email,
  name,
  ...props
}: ProfileCardProps) => {
  return (
    <div className={clsx(s.container, className)} {...props}>
      <Avatar src={avatar} />
      <div className={s.infoWrapper}>
        <Typography className={s.name} variant={'subtitle2'}>
          {name}
        </Typography>
        <Typography className={s.email} variant={'caption'}>
          {email}
        </Typography>
        {children}
      </div>
    </div>
  )
}
