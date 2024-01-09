'use client'
import { FormHTMLAttributes, ReactNode } from 'react';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export const FormRoot = ({ children, ...rest}: Props) => {
  return(
    <form {...rest}>
      { children }
    </form>
  )
}