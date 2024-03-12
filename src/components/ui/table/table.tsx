import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...props }, ref) => {
    return <table className={clsx(className, s.table)} {...props} ref={ref} />
  }
)

export const TableHead = () => {
  return <thead />
}
