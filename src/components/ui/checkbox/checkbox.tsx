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
    <Typography
      as={'label'}
      className={s.label}
      style={{ color: disabled ? 'var(--color-dark-100)' : '' }}
      variant={'body2'}
    >
      <div
        className={s.checkboxWrapper}
        style={{ backgroundColor: disabled ? 'var(--color-dark-900)' : '' }}
      >
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
      {label}
    </Typography>
  </div>
)
