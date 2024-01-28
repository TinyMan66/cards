import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { Close, Search, Visibility, VisibilityOff } from '@/assets'
import { Typography } from '@/components'
import clsx from 'clsx'

import s from '@/components/ui/input/textField.module.scss'

export type TextFieldProps = {
  endIcon?: ReactNode
  errorMessage?: string
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: () => void
  onValueChange?: (value: string) => void
  search?: boolean
  startIcon?: ReactNode
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      endIcon,
      errorMessage,
      label,
      onChange,
      onClearClick,
      onEnter,
      onKeyDown,
      onValueChange,
      search,
      startIcon,
      type,
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const isShowClearButton = onClearClick && restProps?.value?.length! > 0

    const passwordVisibilityHandler = () => {
      setIsPasswordVisible(show => !show)
    }
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e)
      onEnter && e.key === 'Enter' && onEnter()
    }

    if (search) {
      startIcon = <Search />
    }

    const dataStartIcon = startIcon ? 'start' : ''
    const dataEndIcon = endIcon || isShowClearButton || type === 'password' ? 'end' : ''
    const dataIcon = dataStartIcon + dataEndIcon

    const classNames = {
      endIcon: s.endIcon,
      errorMessage: s.errorMessage,
      input: clsx(s.input, errorMessage && s.error, className),
      inputButton: s.inputButton,
      inputContainer: s.inputContainer,
      inputWrapper: s.inputWrapper,
      label: s.label,
      startIcon: s.startIcon,
    }

    return (
      <div className={classNames.inputWrapper}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.inputContainer}>
          {startIcon && <span className={classNames.startIcon}>{startIcon}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            onChange={changeInputHandler}
            onKeyDown={keyDownHandler}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            {...restProps}
            ref={ref}
          />
          {isShowClearButton && (
            <button className={classNames.inputButton} onClick={onClearClick}>
              <Close />
            </button>
          )}
          {type === 'password' && (
            <button className={classNames.inputButton} onClick={passwordVisibilityHandler}>
              {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </button>
          )}
          {endIcon && <span className={classNames.endIcon}>{endIcon}</span>}
        </div>
        {errorMessage && (
          <span aria-live={'polite'} className={classNames.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)
