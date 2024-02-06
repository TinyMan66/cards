import { Button, ControlledTextField } from '@/components'

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
