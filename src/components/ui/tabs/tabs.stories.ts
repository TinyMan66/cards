import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '@/components'

const meta = {
  component: Tabs,
  tags: ['auto docs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '1',
    items: [
      { action: () => console.log('item 1'), name: 'My cards', value: '1' },
      { action: () => console.log('item 2'), name: 'All cards', value: '2' },
    ],
  },
}
