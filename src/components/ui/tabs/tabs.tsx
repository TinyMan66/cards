import * as TabsRadix from '@radix-ui/react-tabs'

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
