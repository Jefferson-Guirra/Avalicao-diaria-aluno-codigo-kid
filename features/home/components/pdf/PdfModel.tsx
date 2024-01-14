'use client'

import styles from './styles.module.css'
import { FieldPdf } from '../pdf-field/FieldPdf'
import { Student } from '../../@types/student'
import GeneratePdf from '@/components/pdf/generatePdf'
import React from 'react'

interface Props extends Student {
  images: string[]
}

export const PdfModel = ({username, classRoom, comments, course, comportment, images, phase, behavior}: Props) => {
  const ref =React.useRef<HTMLDivElement>(null)

  return (
    <>
    <GeneratePdf 
      username={ username } 
      classRoom={ classRoom } 
      course= { course } 
      phase={ phase }   
      html={ref as React.MutableRefObject<HTMLDivElement>} 
    />
    <article className={ styles.container} ref={ref}>
      <div className={ styles.title}>
        <img src={'/images/ck-logo.webp'} alt='codigo-kid-logo'/>
        <h1>Ficha Diária</h1>
      </div>
      <div className={ styles.box}>
        <FieldPdf field='Instituição' value='Codígo kid'/>
        <FieldPdf field='UF' value='Bahia' />
        <FieldPdf field='Unidade' value='Campo Formoso' />
        <FieldPdf field='Telefone' value='(74)12345-6789' />
      </div>
      <div className={ styles.box }>
        <FieldPdf field='Aluno' value={ username}/>
        <FieldPdf field='Curso' value={ course } />
        <FieldPdf field='Fase' value={ phase }/>
        <FieldPdf field='Aula' value={ classRoom } />
      </div>
      <div className={ styles.box }>
        <FieldPdf field='Comportamento' value={ behavior }/>
        {comportment && <FieldPdf field='justificação do comportamento' value={ comportment } /> }
        <FieldPdf field='Observações' value={ comments }/>
      </div>
      {!!images.length && (
      <div className={ styles['box-images']}>
        <p>Imagens:</p>
        <div className={ styles.images }>
          {!!images.length && images.map(url => (
              <img key={url} src={url} alt="any_title" />
          ))}
        </div>

      </div>
      )}
    </article>

    </>
  )
}
