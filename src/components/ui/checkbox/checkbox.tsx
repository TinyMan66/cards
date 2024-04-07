import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
}
export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxRadix.Root>,
  ComponentPropsWithoutRef<typeof CheckboxRadix.Root> & CheckboxProps
>(({ className, disabled, label, ...props }, ref) => {
  const classNames = {
    checkboxContainer: clsx(s.checkboxContainer, className),
    checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.checkboxContainer}>
      <Typography as={'label'} className={classNames.label} variant={'body2'}>
        <div className={classNames.checkboxWrapper}>
          <CheckboxRadix.Root {...props} className={classNames.root} disabled={disabled} ref={ref}>
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <Check />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    </div>
  )
})
