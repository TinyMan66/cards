import { Typography } from '@/components'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export const RadioGroup = () => {
  return (
    <RadioGroupRadix.Root className={s.root}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        <div className={s.radioGroupWrapper}>
          <RadioGroupRadix.Item className={s.item} value={'default'}>
            <RadioGroupRadix.Indicator className={s.indicator} />
          </RadioGroupRadix.Item>
        </div>
        Radio Group
      </Typography>
    </RadioGroupRadix.Root>
  )
}
