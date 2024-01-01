import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useId,
  useState,
} from 'react'

import { Close, Search, Visibility, VisibilityOff } from '@/assets'

import s from './input.module.scss'

type InputProps = {
  endIcon?: ReactNode
  errorMessage?: string
  label?: ReactNode
  onChange: (value: string) => void
  onClearClick?: () => void
  onEnter?: () => void
  startIcon?: ReactNode
  value?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({
  className,
  endIcon,
  errorMessage,
  label,
  onChange,
  onClearClick,
  onEnter,
  onKeyDown,
  startIcon,
  type,
  ...restProps
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const isShowClearButton = onClearClick && restProps?.value?.length! > 0
  const inputId = useId()

  const passwordVisibilityHandler = () => {
    setIsPasswordVisible(prev => !prev)
  }

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
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
        <label className={s.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className={s.inputContainer}>
        {startIcon && <span className={s.startIcon}>{startIcon}</span>}
        <input
          className={`${errorMessage ? s.error : ''} ${s.input} ${className}`}
          data-icon={dataIcon}
          id={inputId}
          onChange={changeInputHandler}
          onKeyDown={keyDownHandler}
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
