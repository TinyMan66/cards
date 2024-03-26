import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets'
import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type Option = {
  label: string
  value: string
}

type SelectProps = {
  className?: string
  labelName?: string
  options: Option[]
  placeholder?: string
  value?: string
}

const SelectItem = forwardRef<
  ElementRef<typeof SelectRadix.Item>,
  ComponentPropsWithoutRef<typeof SelectRadix.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <SelectRadix.Item className={className} {...props} ref={ref}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})

export const Select = forwardRef<
  ElementRef<typeof SelectRadix.Root>,
  Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'value'> & SelectProps
>(({ className, labelName, options, placeholder, value, ...props }, ref) => {
  return (
    <div className={clsx(s.container, className)}>
      {labelName && (
        <Typography
          as={'label'}
          className={clsx(s.label, props.disabled && s.disabled)}
          variant={'body2'}
        >
          {labelName}
        </Typography>
      )}
      <SelectRadix.Root value={value} {...props}>
        <SelectRadix.Trigger className={s.trigger} ref={ref}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={s.icon}>{<ArrowDown />}</SelectRadix.Icon>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                {options.map(option => (
                  <SelectItem className={s.item} key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
})
