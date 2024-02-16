import { Typography } from '@/components'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

export const RadioGroup = () => {
  return (
    <div>
      <RadioGroupRadix.Root>
        <Typography as={'label'} variant={'body2'}>
          <div>
            <RadioGroupRadix.Item value={'default'}>
              <RadioGroupRadix.Indicator />
            </RadioGroupRadix.Item>
          </div>
          Radio Group
        </Typography>
      </RadioGroupRadix.Root>
    </div>
  )
}
