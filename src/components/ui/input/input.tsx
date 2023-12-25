import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react'

import { FaEye, FaEyeSlash, FaSearch, FaTimes } from 'react-icons/fa'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  error?: ReactNode
  onChange: (value: string) => void
  onEnter?: () => void
  variant?: 'password' | 'search' | 'text'
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({
  className,
  error,
  onChange,
  onEnter,
  variant,
  ...restProps
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const passwordVisibilityHandler = () => {
    setIsPasswordVisible(prev => !prev)
  }
  const searchCloseHandler = () => {}
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  const enterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    // onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }
  const inputIcons = () => {
    if (variant === 'password') {
      return (
        <button className={s.iconPassword} onClick={passwordVisibilityHandler}>
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      )
    } else if (variant === 'search') {
      return (
        <>
          <span className={s.iconSearch}>
            <FaSearch />
          </span>
          <button className={s.iconClose} onClick={searchCloseHandler}>
            <FaTimes />
          </button>
        </>
      )
    }
  }

  return (
    <div className={s.inputWrapper}>
      <span className={s.placeholder}>{restProps.placeholder}</span>

      <div className={s.inputBlock}>
        {variant && inputIcons()}
        <input
          className={`${error ? s.error : ''} ${s.input} ${className}`}
          onChange={changeInputHandler}
          onKeyDown={enterPressHandler}
          type={restProps.type ? restProps.type : variant}
          {...restProps}
        />
      </div>
      <span aria-live={'polite'} className={s.errorMessage}>
        {error}
      </span>
    </div>
  )
}
