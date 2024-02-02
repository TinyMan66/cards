import { useForm } from 'react-hook-form'

import { Button, Card, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './RecoverPassword.module.scss'

const recoveryPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type FormValues = z.infer<typeof recoveryPasswordSchema>
export const RecoverPassword = () => {
  const { control } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoveryPasswordSchema),
  })

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form>
          <div className={s.textField}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <Typography className={s.discription} variant={'body2'}>
              Enter your email address and we will send you further instructions
            </Typography>
          </div>
          <Button>Send instructions</Button>
        </form>
        <Typography className={s.inscription} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography className={s.logIn} variant={'link1'}>
          Try to log in
        </Typography>
      </Card>
    </>
  )
}
