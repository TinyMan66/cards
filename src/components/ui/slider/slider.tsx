import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderRadix.Root>, 'value'> & {
    value: (null | number)[]
  }
>(({ className, max, onValueChange, value, ...props }, ref) => {
  return (
    <div className={s.container}>
      <span className={s.value}>{value?.[0]}</span>
      <SliderRadix.Root
        className={clsx(className, s.root)}
        max={max}
        step={1}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
        {...props}
        onValueChange={onValueChange}
        ref={ref}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range className={s.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.thumb} />
        <SliderRadix.Thumb className={s.thumb} />
      </SliderRadix.Root>
      <span className={s.value}>{value?.[1]}</span>
    </div>
  )
})
