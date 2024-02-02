import { SignIn } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/SingIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
