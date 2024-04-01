import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Menu } from '@/assets'
import { Typography } from '@/components'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdowm.module.scss'

type Option = {
  action: () => void
  icon: ReactNode
  value: string
}
type DropdownProps = {
  avatar?: ReactNode
  disabled?: boolean
  options: Option[]
} & DropdownRadix.DropdownMenuProps

const DropDownItem = forwardRef<
  ElementRef<typeof DropdownRadix.Item>,
  ComponentPropsWithoutRef<typeof DropdownRadix.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <DropdownRadix.Item className={clsx(s.item, className)} {...props} ref={ref}>
      {children}
    </DropdownRadix.Item>
  )
})

export const Dropdown = forwardRef<
  ElementRef<typeof DropdownRadix.Root>,
  ComponentPropsWithoutRef<typeof DropdownRadix.Root> & DropdownProps
>(({ avatar, disabled, options, ...props }, ref) => {
  return (
    <div className={s.container}>
      <DropdownRadix.Root>
        <DropdownRadix.Trigger asChild disabled={disabled} {...props} ref={ref}>
          <button className={s.iconButton}>{avatar ? avatar : <Menu />}</button>
        </DropdownRadix.Trigger>
        <DropdownRadix.Portal>
          <DropdownRadix.Content align={'end'} className={s.content} loop sideOffset={8}>
            {options.map((option, index) => (
              <>
                <DropDownItem disabled={disabled} key={option.value} onSelect={option.action}>
                  {option.icon}
                  <Typography as={'caption'} variant={'caption'}>
                    {option.value}
                  </Typography>
                </DropDownItem>
                {index !== options.length - 1 && (
                  <DropdownRadix.Separator className={s.separator} key={option.value} />
                )}
              </>
            ))}
            <DropdownRadix.Arrow className={s.arrow} />
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      </DropdownRadix.Root>
    </div>
  )
})
