import { StudentData } from '../../pages/HomePage'
import styles from './styles.module.css'
import { FieldPdf } from '../pdf-field/FieldPdf'
import Image from 'next/image'

export const PdfModel = ({...data}: StudentData) => {
  console.log(data.comportment)
  return (
    <article className={ styles.container}>
      <div className={ styles.title}>
        <Image src={'/images/ck-logo.webp'} alt='codigo-kid-logo' width={300} height={40}/>
        <h1>Ficha Diária</h1>
      </div>
      <div className={ styles.box}>
        <FieldPdf field='Instituição' value='Codígo kid'/>
        <FieldPdf field='UF' value='Bahia' />
        <FieldPdf field='unidade' value='Campo Formoso' />
        <FieldPdf field='Telefone' value='(74)12345-6789' />
      </div>
      <div className={ styles.box }>
        <FieldPdf field='Aluno' value={ data.username}/>
        <FieldPdf field='Curso' value={ data.course } />
        <FieldPdf field='Fase' value={ data.phase }/>
        <FieldPdf field='Aula' value={ data.classRoom } />
      </div>
      <div className={ styles.box }>
        <FieldPdf field='Comportamento' value={ data.behavior }/>
        <FieldPdf field='Observações' value={ data.comments }/>
        {data.comportment && <FieldPdf field='justificação do comportamento' value={ data.comportment } /> }
      </div>
    </article>
  )
}
