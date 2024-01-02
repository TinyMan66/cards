import { ComponentProps, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

export type CardProps = {
  children: ReactNode
  className?: string
  title: string
} & ComponentProps<'div'>
const Card = ({ children, className, title, ...restProps }: CardProps) => {
  return (
    <div className={className} {...restProps}>
      {title && <Typography variant={'large'}>{title}</Typography>}
      <div>{children}</div>
    </div>
  )
}

export default Card
