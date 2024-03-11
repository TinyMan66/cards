import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import clsx from 'clsx'

import s from './radioGroup.module.scss'

type Option = {
  label: string
  value: string
}

export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupRadix.Root> & {
  disabled?: boolean
  options: Option[]
}

const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroupRadix.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>
>(({ ...props }, ref) => {
  return <RadioGroupRadix.Root ref={ref} {...props} />
})

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupRadix.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>
>(({ ...props }, ref) => {
  return <RadioGroupRadix.Item ref={ref} {...props} />
})

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  ({ disabled, options }, ref, ...props) => {
    const classNames = {
      indicator: clsx(s.indicator, disabled && s.disabled),
      item: clsx(s.item, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
      radioGroupWrapper: clsx(s.radioGroupWrapper, disabled && s.disabled),
      root: s.root,
    }

    return (
      <RadioGroupRoot ref={ref} {...props}>
        {options.map(option => (
          <Typography
            as={'label'}
            className={classNames.label}
            key={option.value}
            variant={'body2'}
          >
            <div className={classNames.radioGroupWrapper}>
              <RadioGroupItem
                className={classNames.item}
                disabled={disabled}
                id={option.value}
                value={option.value}
              >
                <RadioGroupRadix.Indicator className={classNames.indicator} />
              </RadioGroupItem>
            </div>
            {option.label}
          </Typography>
        ))}
      </RadioGroupRoot>
    )
  }
)
