import { useForm } from 'react-hook-form'

import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
      <Card title={'Sign In'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField control={control} label={'e-mail'} name={'email'} type={'email'} />
          <ControlledTextField
            control={control}
            label={'password'}
            name={'password'}
            type={'password'}
          />
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          <Typography variant={'body2'}>Forgot password?</Typography>
          <Button type={'submit'} variant={'primary'}>
            Sign In
          </Button>
          <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
          <Typography variant={'link1'}>Sign Up</Typography>
        </form>
      </Card>
    </>
  )
}
