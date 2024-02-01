import { Button, Card, ControlledTextField, Typography } from '@/components'

import s from './SignUp.module.scss'

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
