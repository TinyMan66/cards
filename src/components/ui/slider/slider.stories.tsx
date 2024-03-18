import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/components'

const meta = {
  component: Slider,
  tags: ['auto docs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = ({ max, value }: { max?: number; value: [number, number] }) => {
  const [sliderValue, setSliderValue] = useState(value)
  const handleSliderChange = (newValue: [number, number]) => {
    setSliderValue(newValue)
  }

  return <Slider max={max} onValueChange={handleSliderChange} value={sliderValue} />
}

Default.args = {
  max: 100,
  value: [10, 50],
}
