import { useForm } from 'react-hook-form'

import { Button, Card, ControlledTextField } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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
      <Card>
        <div>
          <img alt={'avatar'} src={avatar} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField control={control} label={'Nickname'} name={'name'} />
          <Button fullWidth>Save Changes</Button>
        </form>
      </Card>
    </>
  )
}
