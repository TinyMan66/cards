import { Email } from '@/assets'
import { Button, Card, Typography } from '@/components'

import s from './CheckEmail.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.card} title={'Check Email'}>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography className={s.instruction} variant={'body2'}>
        We&apos;ve sent an Email with instructions to {email}
      </Typography>
      <Button fullWidth>Back to Sign In</Button>
    </Card>
  )
}
