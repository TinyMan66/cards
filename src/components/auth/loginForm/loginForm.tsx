import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  console.log('errors: ', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', {
          pattern: { message: 'Invalid email', value: emailRegex },
          required: 'Email is required',
        })}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <TextField
        {...register('password', {
          minLength: { message: 'Password has to be at least 3 characters long', value: 3 },
          required: 'Password is required',
        })}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <Checkbox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
