import { NewPassword } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Auth/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
