import { Button, Card, ControlledTextField, Typography } from '@/components'
import { z } from 'zod'

import s from './SignUp.module.scss'

const loginSchema = z
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

type FormValues = z.infer<typeof loginSchema>
export const SignUp = () => {
  return (
    <>
      <Card className={s.card} title={'Sign Up'}>
        <form>
          <div className={s.textFields}>
            <ControlledTextField label={'Email'} name={'email'} placeholder={'Email'} />
            <ControlledTextField
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
            <ControlledTextField
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
