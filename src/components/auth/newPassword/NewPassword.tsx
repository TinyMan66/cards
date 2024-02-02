import { useForm } from 'react-hook-form'

import { Button, Card, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './NewPassword.module.scss'

const schema = z.object({
  password: z
    .string()
    .min(3, 'Password must contain at least 3 character(s)')
    .max(30, 'Password must be no longer than 30 characters'),
})

type FormValues = z.infer<typeof schema>

export const NewPassword = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(schema),
  })

  return (
    <>
      <Card>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.textField}>
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
          </div>
          <Typography className={s.instruction} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
