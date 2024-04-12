import { ComponentPropsWithoutRef } from 'react'

import { ArrowLeft, ArrowRight } from '@/assets'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  siblings?: number
} & PaginationConditionals &
  Omit<ComponentPropsWithoutRef<'div'>, 'onChange'>

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <ArrowLeft />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <ArrowRight />
    </button>
  )
}

const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button disabled={selected || disabled} onClick={onClick}>
      {page}
    </button>
  )
}

const Dots = () => {
  return <span>&#8230;</span>
}

export const Pagination = ({
  className,
  count,
  onChange,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  siblings,
  ...props
}: PaginationProps) => {
  return (
    <div>
      <PrevButton />
      <PageButton />
      <NextButton />
    </div>
  )
}
