import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets'
import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'

type Option = {
  label: string
  value: string
}

type SelectProps = {
  onChange: (value: string) => void
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

export const Select = forwardRef<
  ElementRef<typeof SelectRadix.Root>,
  Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'value'> & SelectProps
>(({ onChange, options, placeholder, value, ...props }, ref) => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleOpenHandler = () => {
    setOpen(prevOpen => !prevOpen)
  }
  const onValueChangeHandler = (newValue: string) => {
    value && onChange(value)
    onChange(newValue)
  }

  return (
    <>
      <Typography variant={'body2'}>Select-box</Typography>
      <SelectRadix.Root
        onOpenChange={toggleOpenHandler}
        onValueChange={onValueChangeHandler}
        open={open}
        value={value}
        {...props}
      >
        <SelectRadix.Trigger ref={ref}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon>{open ? <ArrowUp /> : <ArrowDown />}</SelectRadix.Icon>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content position={'popper'}>
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
})
