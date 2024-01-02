import { ComponentProps, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/card/card.module.scss'

export type CardProps = {
  children: ReactNode
  className?: string
  title: string
} & ComponentProps<'div'>
export const Card = ({ children, className, title, ...restProps }: CardProps) => {
  return (
    <div className={`${s.cardContainer} ${className}`} {...restProps}>
      {title && (
        <Typography className={s.title} variant={'large'}>
          {title}
        </Typography>
      )}
      <div className={s.content}>{children}</div>
    </div>
  )
}
