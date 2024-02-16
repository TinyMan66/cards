import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onChange' | 'value'>
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
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <TextField
      {...{
        ...restProps,
        ...field,
        disabled: disabled,
        errorMessage: error?.message,
        id: name,
        onChange,
      }}
    />
  )
}
