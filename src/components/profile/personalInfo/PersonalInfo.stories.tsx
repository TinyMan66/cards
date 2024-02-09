import { PersonalInfo } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Profile/PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { avatar: 'avatar', email: 'example@email.com', name: 'Ivan' },
}
