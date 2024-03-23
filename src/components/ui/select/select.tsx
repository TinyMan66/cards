import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown } from '@/assets'
import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'

type Option = {
  label: string
  value: string
}

type SelectProps = {
  onSelect: (value: string) => void
  options: Option[]
  placeholder?: string
  value?: string
}

const SelectItem = forwardRef<
  ElementRef<typeof SelectRadix.Item>,
  ComponentPropsWithoutRef<typeof SelectRadix.Item>
>(({ children, ...props }, ref) => {
  return (
    <SelectRadix.Item {...props} ref={ref}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ onSelect, options, placeholder, value, ...props }, ref) => {
    return (
      <>
        <Typography variant={'body2'}>Select-box</Typography>
        <SelectRadix.Root {...props}>
          <SelectRadix.Trigger ref={ref}>
            <SelectRadix.Value placeholder={placeholder} />
            <SelectRadix.Icon>
              <ArrowDown />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content>
              <SelectRadix.Viewport>
                <SelectRadix.Group>
                  {options.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectRadix.Group>
              </SelectRadix.Viewport>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </>
    )
  }
)
