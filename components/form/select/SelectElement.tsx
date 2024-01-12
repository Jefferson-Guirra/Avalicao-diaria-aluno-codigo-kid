import React, { SelectHTMLAttributes } from 'react'
import styles from './styles.module.css'
import { Error } from '@/components'

export type SelectOptions =  {
  name: string,
  value: string
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  disabledOption: string
  options: Array<SelectOptions>
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>,
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  validate: () => boolean
  onBlur: () => boolean
  error: string
}



export const SelectElement = ({ label, options, disabledOption, value, validate, error, setValue, ...rest }: Props) => {
  return (
  <div className={ styles['select-container']}>
    <label className={ styles.label} htmlFor={ label }> { label }</label>
    <select 
      className={ styles.select}
      name={ label } 
      id={ label } 
      {...rest}
    >
      { options.map((opt, index) =>(<option key={ index } value={ opt.value } disabled = { opt.name === disabledOption }> { opt.name }</option>))}
    </select>
    <Error error={ error }/>

  </div>
  )
}