import { InputHTMLAttributes } from 'react'
import styles from "../styles.module.css"


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  format: | "default",
  validate: () => boolean
  setValue: React.Dispatch<React.SetStateAction<string>>,
  onBlur: () => boolean,
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  error: string
  
}

export const InputDefault = ({ label, type, format, validate, setValue, error, ...rest }: Props) => {
  return (
    <div>
       <label htmlFor={label}>{ label }</label>
       <input  type={ type } id= { label } className={styles['input-' + format]} {...rest}/>
       <p className={ styles.error }>{error}</p>
    </div>
  )
}