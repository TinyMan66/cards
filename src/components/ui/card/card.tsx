import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components'
import clsx from 'clsx'

import s from '@/components/ui/card/card.module.scss'

export type CardProps = {
  children: ReactNode
  className?: string
  title?: string
} & ComponentPropsWithoutRef<'div'>
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, title, ...restProps }, ref) => {
    const classNames = {
      cardContainer: clsx(s.cardContainer, className),
      title: s.title,
    }

    return (
      <div className={classNames.cardContainer} ref={ref} {...restProps}>
        {title && (
          <Typography className={classNames.title} variant={'large'}>
            {title}
          </Typography>
        )}
        {children}
      </div>
    )
  }
)
