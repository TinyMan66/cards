import { Avatar, Typography } from '@/components'

type ProfileCardProps = {
  avatar: string
  email: string
  name: string
}
export const ProfileCard = ({ avatar, email, name }: ProfileCardProps) => {
  return (
    <div>
      <Avatar src={avatar} />
      <div>
        <Typography>{name}</Typography>
        <Typography>{email}</Typography>
      </div>
    </div>
  )
}
