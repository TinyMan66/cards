import { IconProps, IconWrapper } from '../IconWrapper'

const ArrowRight = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'16'}
          viewBox={'0 0 16 16'}
          width={'16'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M6.66667 12.6668C6.5109 12.6671 6.35994 12.6128 6.24 12.5135C6.17249 12.4575 6.11669 12.3888 6.07579 12.3112C6.03489 12.2336 6.00969 12.1488 6.00164 12.0614C5.99359 11.9741 6.00284 11.8861 6.02887 11.8023C6.0549 11.7186 6.0972 11.6408 6.15333 11.5735L9.14 8.00012L6.26 4.42012C6.20462 4.35193 6.16327 4.27347 6.13831 4.18924C6.11336 4.10501 6.1053 4.01669 6.11459 3.92933C6.12388 3.84198 6.15035 3.75733 6.19246 3.68024C6.23458 3.60315 6.29151 3.53514 6.36 3.48012C6.42898 3.41943 6.50975 3.37365 6.59726 3.34566C6.68477 3.31767 6.77712 3.30807 6.86851 3.31746C6.95991 3.32685 7.04838 3.35503 7.12837 3.40023C7.20835 3.44543 7.27814 3.50667 7.33333 3.58012L10.5533 7.58012C10.6514 7.69941 10.705 7.84904 10.705 8.00346C10.705 8.15787 10.6514 8.3075 10.5533 8.42679L7.22 12.4268C7.15312 12.5075 7.06816 12.5712 6.97202 12.6129C6.87588 12.6546 6.77127 12.6731 6.66667 12.6668Z'
            }
            fill={'currentColor'}
          />
        </svg>

      }
      {...restProps}
    />
  )
}

export default ArrowRight