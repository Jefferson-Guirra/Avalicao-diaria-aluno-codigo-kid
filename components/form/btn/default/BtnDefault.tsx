import { ButtonHTMLAttributes } from 'react'
import styles from '../styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  format: | 'default'
  text: string
}

export const BtnDefault = ({format, text, ...rest}: Props) => {
  return (
    <button className={styles[format] }>{ text }</button>
  )
}