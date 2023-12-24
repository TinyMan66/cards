import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/input'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['password', 'search', 'text'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  args: {
    placeholder: 'Enter text',
    value: '',
    variant: 'text',
  },
}
export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter password',
    value: '',
    variant: 'password',
  },
}
