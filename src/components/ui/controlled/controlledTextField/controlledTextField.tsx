import { FieldValues, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> & TextFieldProps
export const ControlledTextField = <T extends FieldValues>({}: ControlledTextFieldProps<T>) => {
  return <TextField />
}
