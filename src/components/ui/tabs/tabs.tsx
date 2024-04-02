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
const TabsContent = forwardRef<
  ElementRef<typeof TabsRadix.Content>,
  ComponentPropsWithoutRef<typeof TabsRadix.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <TabsRadix.Content className={className} {...props} ref={ref}>
      {children}
    </TabsRadix.Content>
  )
})

export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <TabsRadix.Root {...props}>
      <TabsRadix.List>
        <TabsTrigger />
      </TabsRadix.List>
      <TabsContent />
    </TabsRadix.Root>
  )
}
