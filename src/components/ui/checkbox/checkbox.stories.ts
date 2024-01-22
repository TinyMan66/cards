import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components'

const meta = {
  component: Checkbox,
  tags: ['auto docs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'checkbox',
  },
}
