import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components'

import s from '@/components/ui/card/card.module.scss'

export type CardProps = {
  children: ReactNode
  className?: string
  title: string
} & ComponentPropsWithoutRef<'div'>
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, title, ...restProps }, ref) => {
    return (
      <div className={`${s.cardContainer} ${className}`} ref={ref} {...restProps}>
        {title && (
          <Typography className={s.title} variant={'large'}>
            {title}
          </Typography>
        )}
        <div className={s.content}>{children}</div>
      </div>
    )
  }
)
