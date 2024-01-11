import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useId,
  useState,
} from 'react'

import { Close, Search, Visibility, VisibilityOff } from '@/assets'
import { Typography } from '@/components'

import s from '@/components/ui/input/textField.module.scss'

type TextFieldProps = {
  endIcon?: ReactNode
  errorMessage?: string
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: () => void
  onValueChange?: (value: string) => void
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
      startIcon,
      type,
      ...restProps
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
    const isShowClearButton = onClearClick && restProps?.value?.length! > 0
    const inputId = useId()

    const passwordVisibilityHandler = () => {
      setIsPasswordVisible(prev => !prev)
    }

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e)
      onEnter && e.key === 'Enter' && onEnter()
    }

    if (type === 'search') {
      startIcon = <Search />
    }

    const dataStartIcon = startIcon ? 'start' : ''
    const dataEndIcon = endIcon || isShowClearButton || type === 'password' ? 'end' : ''
    const dataIcon = dataStartIcon + dataEndIcon

    return (
      <div className={s.inputWrapper}>
        {label && (
          <Typography as={'label'} className={s.label} htmlFor={inputId} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          {startIcon && <span className={s.startIcon}>{startIcon}</span>}
          <input
            className={`${errorMessage ? s.error : ''} ${s.input} ${className}`}
            data-icon={dataIcon}
            id={inputId}
            onChange={changeInputHandler}
            onKeyDown={keyDownHandler}
            ref={ref}
            {...restProps}
          />
          {isShowClearButton && (
            <button className={s.inputButton} onClick={onClearClick}>
              <Close />
            </button>
          )}
          {type === 'password' && (
            <button className={s.inputButton} onClick={passwordVisibilityHandler}>
              {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
            </button>
          )}
          {endIcon && <span className={s.endIcon}>{endIcon}</span>}
        </div>
        {errorMessage && (
          <span aria-live={'polite'} className={s.errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    )
  }
)
