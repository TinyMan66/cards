import { useForm } from 'react-hook-form'

import { Button, Card, ControlledTextField, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignUp.module.scss'

const signUpSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(3, 'Password must contain at least 3 character(s)')
      .max(30, 'Password must be no longer than 30 characters'),
    passwordConfirmation: z.string(),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  })

type FormValues = z.infer<typeof signUpSchema>
export const SignUp = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card} title={'Sign Up'}>
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
            <ControlledTextField
              control={control}
              label={'Confirm password'}
              name={'passwordConfirmation'}
              placeholder={'Confirm password'}
              type={'password'}
            />
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography className={s.inscription} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography className={s.signIn} variant={'link1'}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
