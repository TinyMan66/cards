import * as DialogRadix from '@radix-ui/react-dialog'

export const Modal = () => (
  <DialogRadix.Root>
    <DialogRadix.Trigger />
    <DialogRadix.Portal>
      <DialogRadix.Overlay />
      <DialogRadix.Content>
        <DialogRadix.Title />
        <DialogRadix.Description />
        <DialogRadix.Close />
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
