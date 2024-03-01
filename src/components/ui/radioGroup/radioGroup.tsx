import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type Option = {
  label: string
  value: string
}

export type RadioGroupProps = {
  options: Option[]
}
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  ({ options }, ref, ...props) => {
    return (
      <RadioGroupRadix.Root className={s.root} ref={ref} {...props}>
        {options.map(option => (
          <Typography as={'label'} className={s.label} key={option.value} variant={'body2'}>
            <div className={s.radioGroupWrapper}>
              <RadioGroupRadix.Item
                className={s.item}
                id={option.value}
                value={option.value}
                {...props}
              >
                <RadioGroupRadix.Indicator className={s.indicator} />
              </RadioGroupRadix.Item>
            </div>
            {option.label}
          </Typography>
        ))}
      </RadioGroupRadix.Root>
    )
  }
)
