import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  ComponentPropsWithoutRef<typeof SliderRadix.Root>
>(({ ...props }, ref) => {
  return (
    <div>
      <SliderRadix.Root defaultValue={[50]} max={100} step={1} {...props} ref={ref}>
        <SliderRadix.Track>
          <SliderRadix.Range />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} />
      </SliderRadix.Root>
    </div>
  )
})
