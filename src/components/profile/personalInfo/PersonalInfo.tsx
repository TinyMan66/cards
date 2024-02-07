import { Edit } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: string) => void
}
export const PersonalInfo = ({ avatar, email, name, onAvatarChange }: Props) => {
  const editAvatarHandler = () => {
    onAvatarChange('')
  }

  return (
    <>
      <Card>
        <Typography variant={'large'}>Personal information</Typography>
        <div>
          <img alt={'avatar'} src={avatar} />
          <button onClick={editAvatarHandler}>
            <Edit />
          </button>
        </div>
        <div>
          <Typography variant={'h2'}>{name}</Typography>
          <button>
            <Edit />
          </button>
        </div>
        <Typography variant={'body2'}>example@mail.com {email}</Typography>
        <Button>Logout</Button>
      </Card>
    </>
  )
}
