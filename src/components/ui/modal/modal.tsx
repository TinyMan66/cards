import { Typography } from '@/components'
import * as DialogRadix from '@radix-ui/react-dialog'

export const Modal = () => (
  <DialogRadix.Root>
    <DialogRadix.Portal>
      <DialogRadix.Overlay />
      <DialogRadix.Content>
        <DialogRadix.Title>
          <Typography as={'h3'} variant={'h3'}>
            Dialog
          </Typography>
        </DialogRadix.Title>
        <DialogRadix.Close />
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
