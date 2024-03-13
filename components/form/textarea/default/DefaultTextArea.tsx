import { TextareaHTMLAttributes } from 'react'
import styles from '../styles.module.css'
import { Error } from '@/components'


interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  format: | "default",
  validate: () => boolean
  setValue: React.Dispatch<React.SetStateAction<string>>,
  onBlur: () => boolean,
  onChange: ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => void
  error: string
  
}


export const DefaultTextArea = ({error, setValue, label, format, validate, ...rest}: Props) => {
  return (
    <div className={styles.container}>
    <label htmlFor={ label }>{label}</label>
    <textarea spellCheck="true" className={styles['text-area-' + format]} id={ label } {...rest}/>
    <Error error={ error }/>   
    </div>
  )
}