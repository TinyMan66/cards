// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
import { useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}
type PaginationRange = ('...' | number)[]

type UsePaginationParamType = {
  count: number
  onChange: (pageNumber: number) => void
  page: number
  siblings?: number
}
export const usePagination = ({ count, onChange, page, siblings = 1 }: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {}, [])

  return paginationRange
}
