import { useForm } from 'react-hook-form'

import { Button, ControlledTextField } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().max(30, 'Name must be no longer than 30 characters'),
})

type FormValues = z.infer<typeof schema>

type Props = {
  userName: string
}
export const PersonalInfoForm = ({ userName }: Props) => {
  const { control } = useForm<FormValues>({
    defaultValues: {
      name: userName,
    },
    resolver: zodResolver(schema),
  })

  return (
    <div>
      <form>
        <ControlledTextField control={control} label={'Nickname'} name={'name'} />
        <Button fullWidth>Save Changes</Button>
      </form>
    </div>
  )
}
