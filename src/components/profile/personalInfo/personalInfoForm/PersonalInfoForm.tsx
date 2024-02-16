import { useForm } from 'react-hook-form'

import { Button, Card, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './PersonalInfoForm.module.scss'

const schema = z.object({
  name: z.string().max(30, 'Name must be no longer than 30 characters'),
})

type FormValues = z.infer<typeof schema>

type Props = {
  avatar: string
  onSubmit: (data: FormValues) => void
  userName: string
}
export const PersonalInfoForm = ({ avatar, onSubmit, userName }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: userName,
    },
    resolver: zodResolver(schema),
  })

  return (
    <>
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.imgContainer}>
          <img alt={'avatar'} src={avatar} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.textField}>
            <ControlledTextField control={control} label={'Nickname'} name={'name'} />
          </div>
          <Button className={s.button} fullWidth>
            Save Changes
          </Button>
        </form>
      </Card>
    </>
  )
}
