import { Check } from '@/assets'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
}
export const Checkbox = ({ label }: CheckboxProps) => (
  <div className={s.checkboxContainer}>
    <CheckboxRadix.Root>
      <CheckboxRadix.Indicator className={s.indicator}>
        <Check />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
    <Typography as={'label'} className={s.label} variant={'body2'}>
      {label}
    </Typography>
  </div>
)
