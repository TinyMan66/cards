import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

import s from './input.module.scss'

type InputProps = {
  endIcon?: ReactNode
  error?: ReactNode
  onChange: (value: string) => void
  onEndIconClick?: () => void
  onEnter?: () => void
  startIcon?: ReactNode
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = ({
  className,
  endIcon,
  error,
  onChange,
  onEndIconClick,
  onEnter,
  onKeyDown,
  placeholder,
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

  const inputIcons = () => {
    if (type === 'password') {
      return (
        <button className={s.iconPassword} onClick={passwordVisibilityHandler}>
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      )
    } else if (type === 'search') {
      return (
        <>
          <span className={s.iconSearch}>{startIcon}</span>
          <button className={s.iconClose} onClick={onEndIconClick}>
            {endIcon}
          </button>
        </>
      )
    } else if (endIcon) {
      return <button onClick={onEndIconClick}>{endIcon}</button>
    }
  }

  return (
    <div className={s.inputWrapper}>
      {type === 'search' ? null : <label className={s.label}>{placeholder}</label>}

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
