import styles from './styles.module.css'
interface Field {
  field: string
  value: string
}
export const FieldPdf = ({ field, value }: Field) => {
  return (
    <div className={ styles.container}>
      <p className={ styles.title }>{ field }</p>
      <p>{ value }</p>
    </div>
  )
}