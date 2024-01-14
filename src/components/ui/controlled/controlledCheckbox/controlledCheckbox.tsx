import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onCheckedChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, ref, value, ...field },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        ref: ref,
        ...field,
        checked: value,
        disabled: disabled,
        id: name,
        onCheckedChange: onChange,
        ...restProps,
      }}
    />
  )
}
