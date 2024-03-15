import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  ComponentPropsWithoutRef<typeof SliderRadix.Root>
>(({ max, onValueChange, value, ...props }, ref) => {
  return (
    <div>
      <SliderRadix.Root
        max={max}
        step={1}
        value={value}
        {...props}
        onValueChange={onValueChange}
        ref={ref}
      >
        <SliderRadix.Track>
          <SliderRadix.Range />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} />
      </SliderRadix.Root>
    </div>
  )
})
