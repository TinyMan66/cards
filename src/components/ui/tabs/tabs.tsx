import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'

type TabsItems = {
  content?: ReactNode
  name: string
  value: string
}
type TabsProps = {
  disabled?: boolean
  items: TabsItems[]
} & TabsRadix.TabsProps

const TabsList = forwardRef<
  ElementRef<typeof TabsRadix.List>,
  ComponentPropsWithoutRef<typeof TabsRadix.List>
>(({ children, className, ...props }, ref) => {
  return (
    <TabsRadix.List className={className} {...props} ref={ref}>
      {children}
    </TabsRadix.List>
  )
})

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

export const Tabs = forwardRef<
  ElementRef<typeof TabsRadix.Root>,
  ComponentPropsWithoutRef<typeof TabsRadix.Root> & TabsProps
>(({ className, disabled, items, ...props }, ref) => {
  return (
    <TabsRadix.Root className={className} {...props} ref={ref}>
      <TabsList>
        {items.map(item => (
          <TabsTrigger disabled={disabled} key={item.value} value={item.value}>
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map(
        item =>
          item.content && (
            <TabsContent key={item.value} value={item.value}>
              {item.content}
            </TabsContent>
          )
      )}
    </TabsRadix.Root>
  )
})
