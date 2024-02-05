import { Button, Card, Typography } from '@/components'

type Props = {
  avatar: string
  email: string
  name: string
}
export const PersonalInfo = ({ avatar, email, name }: Props) => {
  return (
    <>
      <Card>
        <Typography variant={'large'}>Personal information</Typography>
        <div>
          <img alt={'avatar'} src={avatar} />
          <button>edit</button>
        </div>
        <div>
          <Typography variant={'h2'}>Name {name}</Typography>
          <button>edit</button>
        </div>
        <Typography variant={'body2'}>example@mail.com {email}</Typography>
        <Button>Logout</Button>
      </Card>
    </>
  )
}
