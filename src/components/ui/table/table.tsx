import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...props }, ref) => {
    return <table className={clsx(className, s.table)} {...props} ref={ref} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...props }, ref) => {
    return <thead {...props} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...props }, ref) => {
    return <tbody {...props} ref={ref} />
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...props }, ref) => {
    return <tr {...props} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...props }, ref) => {
    return (
      <th className={clsx(className, s.headCell)} {...props} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...props }, ref) => {
    return <td className={clsx(className, s.tableCell)} {...props} ref={ref} />
  }
)

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
export const TableHeader: FC<
  Omit<ComponentPropsWithoutRef<'thead'>, 'children'> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  }
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable = true, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
