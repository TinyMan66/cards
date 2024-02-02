import { Button, Card, ControlledTextField, Typography } from '@/components'

import s from './NewPassword.module.scss'

export const NewPassword = () => {
  return (
    <>
      <Card>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form>
          <div className={s.textField}>
            <ControlledTextField
              label={'Password'}
              name={'newPassword'}
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
