import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react'

import { Close, Search, Visibility, VisibilityOff } from '@/assets'

import s from './input.module.scss'

type InputProps = {
  endIcon?: ReactNode
  error?: ReactNode
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
  error,
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

  const isShowClearButton = onClearClick && restProps?.value?.length! > 0
  const inputIcons = () => {
    if (type === 'password') {
      return (
        <button className={s.iconPassword} onClick={passwordVisibilityHandler}>
          {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
        </button>
      )
    } else if (type === 'search') {
      return (
        <>
          <span className={s.iconSearch}>
            <Search />
          </span>
          {isShowClearButton && (
            <button className={s.iconClose} onClick={onClearClick}>
              <Close />
            </button>
          )}
        </>
      )
    } else if (endIcon) {
      return <button onClick={onClearClick}>{endIcon}</button>
    }
  }

  return (
    <div className={s.inputWrapper}>
      {label && <label className={s.label}>{label}</label>}

      <div className={s.inputBlock}>
        {inputIcons()}
        <input
          className={`${error ? s.error : ''} ${s.input} ${className}`}
          onChange={changeInputHandler}
          onKeyDown={keyDownHandler}
          {...restProps}
        />
      </div>
      <span aria-live={'polite'} className={s.errorMessage}>
        {error}
      </span>
    </div>
  )
}
