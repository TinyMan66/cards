import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'

type TabsItems = {
  content: ReactNode
  name: string
  value: string
}
type TabsProps = { items: TabsItems[] } & TabsRadix.TabsProps

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsRadix.Trigger>,
  ComponentPropsWithoutRef<typeof TabsRadix.Trigger>
>(({ children, className, ...props }, ref) => {
  return (
    <TabsRadix.Trigger className={className} {...props} ref={ref}>
      {children}
    </TabsRadix.Trigger>
  )
})

export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <TabsRadix.Root {...props}>
      <TabsRadix.List>
        <TabsTrigger />
      </TabsRadix.List>
      <TabsRadix.Content />
    </TabsRadix.Root>
  )
}
