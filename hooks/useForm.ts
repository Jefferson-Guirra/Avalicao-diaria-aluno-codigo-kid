import { useState } from 'react'

type Props = | 'default' | 'text'



const validate = (type: Props, value: string) => {
  const defaultTest = (data: string) => data.length >=1
  const validations = {
    default: defaultTest(value),
    text: defaultTest(value)
  }
  const validate = {
    default: validations.default,
    text: validations.text
  }
  return validate[type]
}
const errorMessage = (value: string , type: Props) => {
  const defaultMessage = 'Campo obrigatório'
  const message: any = {
    default: defaultMessage,
    text: defaultMessage
  }
  return message[type]
}
export const useForm = (type: Props) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const validateValue = (value: string): boolean => {
    const validation = validate(type, value)

    if(!validation){
      setError(errorMessage(value, type))
    } 
      
    else{
      setError('')
    
    } 
    
      

    return validation
  } 
  const onChange = ({target}: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValue(target.value)
    if(error.length) validateValue(value)
  }

  return {
    error,
    setValue,
    value,
    onChange,
    validate: () => validateValue(value),
    onBlur: () => validateValue(value)
  }

}