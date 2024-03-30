import type { Meta, StoryObj } from '@storybook/react'

import { Edit, Play, TrashCan } from '@/assets'
import { Dropdown } from '@/components'

const meta = {
  component: Dropdown,
  tags: ['auto docs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { icon: <Play />, value: 'Learn' },
      { icon: <Edit />, value: 'Edit' },
      { icon: <TrashCan />, value: 'Delete' },
    ],
  },
}
