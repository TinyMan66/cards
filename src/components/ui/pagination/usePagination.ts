// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
import { useMemo } from 'react'

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
