import * as DropdownRadix from '@radix-ui/react-dropdown-menu'

export const Dropdown = () => {
  return (
    <>
      <DropdownRadix.Root>
        <DropdownRadix.Trigger></DropdownRadix.Trigger>
        <DropdownRadix.Portal>
          <DropdownRadix.Content>
            <DropdownRadix.Item></DropdownRadix.Item>
            <DropdownRadix.Separator />
            <DropdownRadix.Item></DropdownRadix.Item>
            <DropdownRadix.Separator />
            <DropdownRadix.Item></DropdownRadix.Item>
          </DropdownRadix.Content>
        </DropdownRadix.Portal>
      </DropdownRadix.Root>
    </>
  )
}
