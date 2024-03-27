import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components'

const meta = {
  component: Select,
  tags: ['auto docs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    labelName: 'Select-box',
    options: [
      { label: 'Option one', value: 'option-one' },
      { label: 'Option two', value: 'option-two' },
      { label: 'Option three', value: 'option-three' },
      { label: 'Option four', value: 'option-four' },
    ],
    placeholder: 'Select-box',
  },
}
