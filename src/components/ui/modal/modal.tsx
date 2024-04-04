import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { Typography } from '@/components'
import * as DialogRadix from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type ModalProps = {
  children: ReactNode
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof DialogRadix.Dialog>, 'onOpenChange' | 'open'>
export const Modal = ({ children, title, ...props }: ModalProps) => (
  <DialogRadix.Root {...props}>
    <DialogRadix.Portal>
      <DialogRadix.Overlay className={s.overlay} />
      <DialogRadix.Content className={s.content}>
        <div className={s.header}>
          <DialogRadix.Title asChild>
            <Typography as={'h3'} variant={'h3'}>
              {title}
            </Typography>
          </DialogRadix.Title>
          <DialogRadix.Close>
            <Close />
          </DialogRadix.Close>
        </div>
        {children}
      </DialogRadix.Content>
    </DialogRadix.Portal>
  </DialogRadix.Root>
)
