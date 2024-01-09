import React, { SelectHTMLAttributes } from 'react'
import styles from './styles.module.css'

export type OptionCourse =  {
  name: string,
  value: string
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  disabledOption: string
  options: Array<OptionCourse>
  value: string,
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  validate: () => boolean
  onBlur: () => boolean
}



export const SelectElement = ({ label, options, disabledOption, value,validate, ...rest }: Props) => {
  return (
  <div className={ styles['select-container']}>
    <label className={ styles.label} htmlFor={ label }> { label+':' }</label>
    <select 
      name={ label } 
      id={ label } 
      {...rest}
    >
      { options.map((opt, index) =>(<option key={ index } value={ opt.value } disabled = { opt.name === disabledOption }> { opt.name }</option>))}
    </select>
    

  </div>
  )
}