import { Button, Card, Typography } from '@/components'

export const ProfileInfo = () => {
  return (
    <>
      <Card>
        <Typography variant={'large'}>Personal information</Typography>
        <div>
          <img />
          <button>edit</button>
        </div>
        <div>
          <Typography variant={'h2'}>Name</Typography>
          <button>edit</button>
        </div>
        <Typography variant={'body2'}>example@mail.com</Typography>
        <Button>Logout</Button>
      </Card>
    </>
  )
}
