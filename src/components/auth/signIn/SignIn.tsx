import { useForm } from 'react-hook-form'

import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(3, 'Password must contain at least 3 character(s)')
    .max(30, 'Password must be no longer than 30 characters'),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const SignIn = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card} title={'Sign In'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.textFields}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
          </div>
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          <Typography className={s.recoverPassword} variant={'body2'}>
            Forgot password?
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography className={s.inscription} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <Typography className={s.signUp} variant={'link1'}>
          Sign Up
        </Typography>
      </Card>
    </>
  )
}
