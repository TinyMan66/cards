import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Menu } from '@/assets'
import * as DropdownRadix from '@radix-ui/react-dropdown-menu'
type Option = {
  icon: ReactNode
  value: string
}
type DropdownProps = {
  avatar?: ReactNode
  options: Option[]
}
export const Dropdown = ({ avatar }: DropdownProps) => {
  const DropDownItem = forwardRef<
    ElementRef<typeof DropdownRadix.Item>,
    ComponentPropsWithoutRef<typeof DropdownRadix.Item>
  >(({ children, className, ...props }, ref) => {
    return (
      <DropdownRadix.Item className={className} {...props} ref={ref}>
        {children}
      </DropdownRadix.Item>
    )
  })

  return (
    <>
      <DropdownRadix.Root>
        <DropdownRadix.Trigger>
          <button>{avatar ? <div>{avatar}</div> : <Menu />}</button>
        </DropdownRadix.Trigger>
        <DropdownRadix.Portal>
          <DropdownRadix.Content>
            <DropDownItem>..</DropDownItem>
            <DropdownRadix.Separator />
            <DropDownItem>..</DropDownItem>
            <DropdownRadix.Separator />
            <DropDownItem>..</DropDownItem>
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      </DropdownRadix.Root>
    </>
  )
}
