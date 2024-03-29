import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Menu } from '@/assets'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdowm.module.scss'

type Option = {
  icon: ReactNode
  value: string
}
type DropdownProps = {
  avatar?: ReactNode
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
>(({ avatar, options, ...props }, ref) => {
  return (
    <DropdownRadix.Root>
      <DropdownRadix.Trigger asChild {...props} ref={ref}>
        <button className={s.iconButton}>{avatar ? <div>{avatar}</div> : <Menu />}</button>
      </DropdownRadix.Trigger>
      <DropdownRadix.Portal>
        <DropdownRadix.Content>
          {options.map((option, index) => (
            <>
              <DropDownItem key={option.value}>
                {option.icon}
                {option.value}
              </DropDownItem>
              {index !== options.length - 1 && <DropdownRadix.Separator key={option.value} />}
            </>
          ))}
        </DropdownRadix.Content>
      </DropdownRadix.Portal>
    </DropdownRadix.Root>
  )
})
