import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  className?: string
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
  link1: 'a',
  link2: 'a',
}

export const Typography = <T extends ElementType = 'h1'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as = 'h1', children, className, variant = 'h1', ...rest } = props
  const Component = as || components[as] || components.default

  const classNames = {
    typography: clsx(className, s.typography, s[variant]),
  }

  return (
    <Component className={classNames.typography} {...rest}>
      {children}
    </Component>
  )
}
