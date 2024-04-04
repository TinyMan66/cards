import { Close } from '@/assets'
import { Typography } from '@/components'
import * as DialogRadix from '@radix-ui/react-dialog'

export const Modal = () => (
  <DialogRadix.Root>
    <DialogRadix.Portal>
      <DialogRadix.Overlay />
      <DialogRadix.Content>
        <div>
          <DialogRadix.Title asChild>
            <Typography as={'h3'} variant={'h3'}>
              Dialog
            </Typography>
          </DialogRadix.Title>
          <DialogRadix.Close>
            <Close />
          </DialogRadix.Close>
        </div>
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
