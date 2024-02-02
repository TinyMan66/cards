import { SignUp } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
