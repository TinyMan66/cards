import { ComponentPropsWithoutRef } from 'react'

import { ArrowLeft, ArrowRight } from '@/assets'
import { Select } from '@/components'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: string) => void
      perPage: string
      perPageOptions: string[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: string) => void
  page: number
  perPage?: null | string
  perPageOptions?: string[]
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

const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root(className?: string) {
    return clsx(s.root, className)
  },
  select: s.select,
  selectWrapper: s.selectWrapper,
}

const PrevButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <ArrowLeft className={classNames.icon} />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <ArrowRight className={classNames.icon} />
    </button>
  )
}

const PageButton = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}

const Dots = () => {
  return <span className={classNames.dots}>&#8230;</span>
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsProps) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: string) => void
  perPage: string
  perPageOptions: string[]
}

export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  return (
    <div className={classNames.selectWrapper}>
      Показать
      <Select
        className={classNames.select}
        onValueChange={onPerPageChange}
        options={selectOptions}
        value={perPage}
      />
      на странице
    </div>
  )
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
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.root(className)} {...props}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>
      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}
