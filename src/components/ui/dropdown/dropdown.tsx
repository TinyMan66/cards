import React, { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Menu } from '@/assets'
import { Avatar, ProfileCard, Typography } from '@/components'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdowm.module.scss'

type Option = {
  action: () => void
  icon: ReactNode
  value: string
}
type DropdownProps = {
  avatar?: string
  disabled?: boolean
  email?: string
  name?: string
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
>(({ avatar, disabled, email, name, options, ...props }, ref) => {
  const avatarProfile = avatar && (
    <DropDownItem className={s.profileCard} key={avatar}>
      <ProfileCard avatar={avatar} email={email} name={name} />
    </DropDownItem>
  )

  return (
    <div className={s.container}>
      <DropdownRadix.Root>
        <DropdownRadix.Trigger asChild disabled={disabled} {...props} ref={ref}>
          <button className={s.iconButton}>{avatar ? <Avatar src={avatar} /> : <Menu />}</button>
        </DropdownRadix.Trigger>
        <DropdownRadix.Portal>
          <DropdownRadix.Content align={'end'} className={s.content} loop sideOffset={8}>
            <React.Fragment key={avatar}>
              {avatarProfile}
              <DropdownRadix.Separator className={s.separator} />
            </React.Fragment>
            {options.map((option, index) => (
              <React.Fragment key={option.value}>
                <DropDownItem disabled={disabled} onSelect={option.action}>
                  {option.icon}
                  <Typography variant={'caption'}>{option.value}</Typography>
                </DropDownItem>
                {index !== options.length - 1 && (
                  <DropdownRadix.Separator className={s.separator} />
                )}
              </React.Fragment>
            ))}
            <DropdownRadix.Arrow className={s.arrow} />
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      </DropdownRadix.Root>
    </div>
  )
})
