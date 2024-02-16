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
  ({ options }, ref) => {
    return (
      <RadioGroupRadix.Root className={s.root} ref={ref}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          <div className={s.radioGroupWrapper}>
            <RadioGroupRadix.Item className={s.item} value={'default'}>
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
          </div>
          Radio Group
        </Typography>
      </RadioGroupRadix.Root>
    )
  }
)
