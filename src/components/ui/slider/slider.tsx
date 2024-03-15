import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'
export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  ComponentPropsWithoutRef<typeof SliderRadix.Root>
>(({ className, max, onValueChange, value, ...props }, ref) => {
  return (
    <div className={s.container}>
      <SliderRadix.Root
        className={clsx(className, s.root)}
        max={max}
        step={1}
        value={value}
        {...props}
        onValueChange={onValueChange}
        ref={ref}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} />
      </SliderRadix.Root>
    </div>
  )
})