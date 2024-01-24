import { ElementRef, forwardRef } from 'react'

import { Check } from '@/assets'
import { Typography } from '@/components'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onCheckedChange?: (checked: boolean) => void
  required?: boolean
}
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, className, disabled, id, label, onCheckedChange, required }, ref) => {
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
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onCheckedChange}
              ref={ref}
              required={required}
            >
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator}>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </div>
    )
  }
)
