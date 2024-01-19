import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> & TextFieldProps
export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...restProps
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onChange, ref, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <TextField
      {...{
        ref: ref,
        ...field,
        disabled: disabled,
        name: name,
        onChange,
        ...restProps,
      }}
    />
  )
}
