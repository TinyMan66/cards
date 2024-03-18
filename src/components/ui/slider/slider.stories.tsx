import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components'

const meta = {
  component: Slider,
  tags: ['auto docs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: [0, 100],
  },
}
