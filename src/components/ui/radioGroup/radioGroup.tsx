import * as RadioGroupRadix from '@radix-ui/react-radio-group'
export const RadioGroup = () => {
  return (
    <div>
      <RadioGroupRadix.Root>
        <RadioGroupRadix.Item value={'default'}>
          <RadioGroupRadix.Indicator />
        </RadioGroupRadix.Item>
      </RadioGroupRadix.Root>
    </div>
  )
}
