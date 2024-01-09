import { useState } from 'react'

export const useSelect = () => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const validateValue = (value: string): boolean => {
    const validation = value.length >=1

    if(!validation){
      setError('Campo obrigatório')
    } 
      
    else{
      setError('')
    
    } 
    return validation
  } 
  const onChange = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(target.value)
    if(error.length) validateValue(value)
  }

  return {
    error,
    value,
    onChange,
    validate: () => validateValue(value),
    onBlur: () => validateValue(value)
  }

}