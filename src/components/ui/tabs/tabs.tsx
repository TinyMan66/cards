import { ReactNode } from 'react'

import * as TabsRadix from '@radix-ui/react-tabs'

type TabItems = {
  content: ReactNode
  name: string
  value: string
}
type TabsProps = { items: TabItems[] } & TabsRadix.TabsProps
export const Tabs = () => {
  return (
    <TabsRadix.Root>
      <TabsRadix.List>
        <TabsRadix.Trigger />
      </TabsRadix.List>
      <TabsRadix.Content />
    </TabsRadix.Root>
  )
}
