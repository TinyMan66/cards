import { Check } from '@/assets'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onCheckedChange: (checked: boolean) => void
  required?: boolean
}
export const Checkbox = ({
  checked,
  className,
  disabled,
  id,
  label,
  onCheckedChange,
  required,
}: CheckboxProps) => (
  <div className={`${className} ${s.checkboxContainer}`}>
    <div className={s.checkboxWrapper}>
      <CheckboxRadix.Root
        checked={checked}
        className={s.root}
        disabled={disabled}
        id={id}
        onCheckedChange={onCheckedChange}
        required={required}
      >
        {checked && (
          <CheckboxRadix.Indicator className={s.indicator}>
            <Check />
          </CheckboxRadix.Indicator>
        )}
      </CheckboxRadix.Root>
    </div>
    <Typography as={'label'} className={s.label} id={id} variant={'body2'}>
      {label}
    </Typography>
  </div>
)
