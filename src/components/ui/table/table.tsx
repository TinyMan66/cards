import { ComponentPropsWithoutRef, forwardRef } from 'react'

forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(({ ...props }, ref) => {
  return <table {...props} ref={ref}></table>
})
