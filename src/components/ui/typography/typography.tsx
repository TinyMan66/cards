import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>
const components: Record<string, ElementType> = {
  default: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
}

export const Typography = <T extends ElementType = 'h1'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as = 'h1', children, variant = 'h1', ...rest } = props
  const Component = as || components[as] || components.default

  return (
    <Component className={`${s.typography} ${s[variant]}`} {...rest}>
      {children}
    </Component>
  )
}
