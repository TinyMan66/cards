import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components'

const meta = {
  component: RadioGroup,
  tags: ['auto docs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Option one', value: 'option-one' },
      { label: 'Option two', value: 'option-two' },
    ],
  },
}
