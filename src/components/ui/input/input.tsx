import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

import {
  FaEye,
  FaSearch,
  // FaEyeSlash,
  FaTimes,
} from 'react-icons/fa'

import s from './input.module.scss'

export type InputProps = {
  children?: ReactNode
  className?: string
  error?: ReactNode
  onChange: (value: string) => void
  onEnter?: () => void
  onSearch?: () => void
  onTogglePasswordVisibility?: () => void
  placeholder: string
  value: string
  variant?: 'password' | 'search' | 'text'
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({
  children,
  className,
  disabled,
  error,
  onChange,
  onEnter,
  onSearch,
  onTogglePasswordVisibility,
  placeholder,
  variant,
  ...restProps
}: InputProps) => {
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  const iconHandler = () => {
    if (variant === 'password' && onTogglePasswordVisibility) {
      onTogglePasswordVisibility()
    } else if (variant === 'search' && onSearch) {
      onSearch()
    }
  }

  return (
    <div className={s.inputContainer}>
      <span className={s.placeholder}>{placeholder}</span>

      <div className={s.inputBlock}>
        {variant === 'search' && (
          <>
            <span className={s.iconSearch} onClick={iconHandler}>
              <FaSearch />
            </span>
            <span className={s.iconClose} onClick={iconHandler}>
              <FaTimes />
            </span>
          </>
        )}
        {variant === 'password' && (
          <span className={s.iconPassword} onClick={iconHandler}>
            <FaEye />
          </span>
        )}
        <input
          className={`${error ? s.error : ''} ${s.input}`}
          disabled={disabled}
          onChange={changeInputHandler}
          placeholder={placeholder}
          type={variant}
          {...restProps}
        />
      </div>
      <span aria-live={'polite'} className={s.errorMessage}>
        {error}
      </span>
    </div>
  )
}
