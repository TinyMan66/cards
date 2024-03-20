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

export const Select = ({ onSelect, options, placeholder, value }: SelectProps) => {
  return (
    <>
      <Typography variant={'body2'}>Select-box</Typography>
      <SelectRadix.Root>
        <SelectRadix.Trigger>
          <SelectRadix.Value placeholder={placeholder} />
          <ArrowDown />
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                {options.map(option => (
                  <SelectRadix.Item key={option.value} value={option.value}>
                    {option.label}
                  </SelectRadix.Item>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}
