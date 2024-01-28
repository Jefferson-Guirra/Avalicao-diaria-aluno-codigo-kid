'use client'
import styles from './styles.module.css'
import { FieldPdf } from '../pdf-field/FieldPdf'
import { Student } from '../../@types/student'
import React, { useRef } from 'react'
import { contentPhases } from '@/features/constants/content'
import jsPDF from 'jspdf'

interface Props extends Student {
  images: string[]
}

export const PdfModel = ({username, classRoom, comments, course, evaluations, images, phase, behavior}: Props) => {
  const content: any = contentPhases
  const cardRef = useRef<HTMLDivElement>(null);



  const prepareDocument = async () => {
    const cardElement = cardRef.current;
    const fileName = username + '-' + course + '-' + phase + '-' + classRoom
    if (!cardElement) return;

    try {
      // lazy load this package
      const html2canvas = await import(
        /* webpackPrefetch: true */ "html2canvas"
      );

      const result = await html2canvas.default(cardElement);

      const doc = new jsPDF();
      doc.addImage(result,'JPEG',5,22,200,160);
      doc.save(fileName);
    } catch (reason) {
      console.log(reason);
    }
  };


  return (
    <>
    <div className= { styles['button-container']}>
      <button className={ styles.btn } onClick={prepareDocument}>
        Gerar Pdf
      </button>
    </div>
    <div className={ styles.container}>
      <div className={ styles.content} ref={cardRef}>
        <div className={ styles.title}>
          <img src={'/images/ck-logo.webp'} alt='codigo-kid-logo'/>
          <h1>Ficha Diária</h1>
        </div>
        <div className={ styles.box}>
          <FieldPdf field='Instituição' value='Codígo kid'/>
          <FieldPdf field='UF' value='Bahia' />
          <FieldPdf field='Unidade' value='Campo Formoso' />
          <FieldPdf field='Telefone' value='(74)8129-7562' />
        </div>
        <div className={ styles.box }>
          <FieldPdf field='Aluno' value={ username}/>
          <FieldPdf field='Curso' value={ course } />
          <FieldPdf field='Fase' value={ phase }/>
          <FieldPdf field='Aula' value={ classRoom } />
        </div>
        <div className={ styles.box }>
          <FieldPdf field='Avaliação' value={ evaluations }/>
          <FieldPdf field='Conteúdo' value={ content[course][phase][classRoom] }/>
          <FieldPdf field='Comportamento' value={ behavior }/>
          <FieldPdf field='Observações' value={ comments }/>
        </div>
        {!!images.length && (
        <div className={ styles['box-images']}>
          <p>Imagens:</p>
          <div className={ styles.images }>
            {!!images.length && images.map((url, index) => (
                <img id='image' key={index} src={url} alt="imagem-projeto"  width="300" height="200" />
            ))}
          </div>

        </div>
        )}
      </div>
    </div>
    </>
  )
}
