import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox {...register('rememberMe')} label={'remember me'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
