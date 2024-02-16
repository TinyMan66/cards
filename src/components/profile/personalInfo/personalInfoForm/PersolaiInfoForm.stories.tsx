import { PersonalInfoForm } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PersonalInfoForm,
  tags: ['autodocs'],
  title: 'Profile/PersonalInfoForm',
} satisfies Meta<typeof PersonalInfoForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { avatar: 'avatar', userName: 'Ivan' },
}
