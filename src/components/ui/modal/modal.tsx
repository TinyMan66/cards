import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { Typography } from '@/components'
import * as DialogRadix from '@radix-ui/react-dialog'

type ModalProps = {
  children: ReactNode
  onOpenChange: (open: boolean) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogRadix.Dialog>, 'onOpenChange' | 'open'>
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
