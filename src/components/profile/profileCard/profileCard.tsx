import { ComponentPropsWithoutRef } from 'react'

import { Avatar, Typography } from '@/components'

type ProfileCardProps = ComponentPropsWithoutRef<'div'> & {
  avatar: string
  email: string
  name: string
}
export const ProfileCard = ({ avatar, email, name, ...props }: ProfileCardProps) => {
  return (
    <div {...props}>
      <Avatar src={avatar} />
      <div>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography variant={'caption'}>{email}</Typography>
      </div>
    </div>
  )
}
