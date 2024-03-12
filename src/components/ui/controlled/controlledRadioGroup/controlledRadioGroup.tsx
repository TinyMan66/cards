import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

export type ControlledRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { control, name, ...rest } = props

  const {
    field: { onChange, ...field },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} {...field} id={name} onValueChange={onChange} />
}
