import { Check } from '@/assets'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {}
export const Checkbox = () => (
  <div className={s.checkboxContainer}>
    <CheckboxRadix.Root>
      <CheckboxRadix.Indicator className={s.indicator}>
        <Check />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  </div>
)
