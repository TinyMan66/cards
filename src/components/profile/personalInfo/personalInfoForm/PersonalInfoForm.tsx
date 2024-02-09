import { Button, ControlledTextField } from '@/components'
import { z } from 'zod'

const schema = z.object({
  name: z.string().max(30, 'Name must be no longer than 30 characters'),
})

type FormValues = z.infer<typeof schema>
export const PersonalInfoForm = () => {
  return (
    <div>
      <form>
        <ControlledTextField label={'Nickname'} name={'name'} />
        <Button fullWidth>Save Changes</Button>
      </form>
    </div>
  )
}
