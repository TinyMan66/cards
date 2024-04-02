import { ReactNode } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'

type TabsItems = {
  content: ReactNode
  name: string
  value: string
}
type TabsProps = { items: TabsItems[] } & TabsRadix.TabsProps
export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <TabsRadix.Root {...props}>
      <TabsRadix.List>
        <TabsRadix.Trigger />
      </TabsRadix.List>
      <TabsRadix.Content />
    </TabsRadix.Root>
  )
}
