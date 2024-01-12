import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onCheckedChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onCheckedChange: onChange,
        ...restProps,
      }}
    />
  )
}
