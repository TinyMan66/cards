import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/input/textField'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['password', 'search', 'text'],
    },
  },
  component: TextField,
  tags: ['auto docs'],
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
    value: '',
  },
}
export const PasswordInput: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
    value: '',
  },
}
export const SearchInput: Story = {
  args: {
    disabled: false,
    placeholder: 'Input search',
    type: 'search',
    value: '',
  },
}
export const ErrorInput: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
    value: '',
  },
}
