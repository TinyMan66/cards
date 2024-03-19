import { ArrowDown } from '@/assets'
import { Typography } from '@/components'
import * as SelectRadix from '@radix-ui/react-select'

export const Select = () => {
  return (
    <>
      <Typography variant={'body2'}>Select-box</Typography>
      <SelectRadix.Root>
        <SelectRadix.Trigger>
          <SelectRadix.Value placeholder={'Select'} />
          <ArrowDown />
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                <SelectRadix.Item value={'1'}>Item 1</SelectRadix.Item>
                <SelectRadix.Item value={'2'}>Item 2</SelectRadix.Item>
                <SelectRadix.Item value={'3'}>Item 3</SelectRadix.Item>
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </>
  )
}
