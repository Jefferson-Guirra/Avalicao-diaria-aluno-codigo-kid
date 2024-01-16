"use client"
import styles from './styles.module.css'
import React, { useState } from 'react'
import { 
  dataCoursers,
  Form, 
  useForm, 
  phases, 
  behavior, 
  createClassRoomArray,  
  PdfModel} from './protocols'
import { Student } from '../@types/student'

const classRoom = createClassRoomArray()

export const HomePage = () => {
  const [studentData, setStudentData] = useState<Student>({} as Student)
  const username = useForm('default')
  const classroom = useForm('text')
  const dataPhases: any = phases
  const selectOptions = useForm('default')
  const phasesOptions = useForm('default')
  const behaviorOptions = useForm('default')
  const comportment = useForm('default')
  const comments = useForm('default')
  const [urls, setUrls] = useState<string[]>([])

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!!e.target.files?.length) {
      const selectedFiles = e.target.files
      let allFiles = []

      for(let count = 0; count < selectedFiles.length; count++) {
        allFiles.push(selectedFiles[count])
      }
  
      if(selectedFiles) {
        const getUrls = allFiles.map((file:any) => URL.createObjectURL(file))
        setUrls(getUrls)
      }

    }
  }
  
  
  const handleSubmit = (e: React.FormEvent <HTMLFormElement>) => {
    e.preventDefault()
    const validate = username.validate() && selectOptions.validate() && classroom.validate() && selectOptions.validate() && phasesOptions.validate()
    behaviorOptions.validate() && comments.validate()

    if(validate) {
      setStudentData({
        username: username.value,
        course: selectOptions.value,
        phase: phasesOptions.value,
        behavior: behaviorOptions.value,
        classRoom: classroom.value,
        comments: comments.value,
        comportment: comportment.value
      })
    }
  }
  return (
      <section className={ styles.container }>
      <h2>Avaliação do Aluno</h2>
        <Form.Root onSubmit={handleSubmit}>
          <Form.InputDefault label='Aluno:' format='default' type='text' {...username}/>
          <Form.SelectElement {...selectOptions} label='Curso:' options={dataCoursers} defaultValue='Escolha o curso' disabledOption='Escolha o curso' />
          { !!selectOptions.value && 
          <Form.SelectElement 
            {...phasesOptions} 
            label='Fase' 
            options={dataPhases[selectOptions.value] } 
            defaultValue='Escolha a fase' 
            disabledOption='Escolha a fase' />
          }
          <Form.SelectElement defaultValue={ 'Escolha a aula' } disabledOption='Escolha a aula' {...classroom} label='Aula:' options={classRoom}/>
          <Form.SelectElement 
            {...behaviorOptions}
            label='Comportamento:'
            options={behavior}
            defaultValue={ 'Escolha o comportamento'}
            disabledOption='Escolha o comportamento'
          />
          {behaviorOptions.value === 'ruim' || behaviorOptions.value === 'intermediário'  && <Form.TextArea {...comportment} label='Justifique comportamento:' format='default' />}
          <Form.TextArea {...comments} label='Observações:' format='default'/>
          <input type="file" multiple  onChange={handleOnchange}/>
          <Form.Button text='criar documento' format='default'/>
        </Form.Root>
        {Object.keys(studentData).length > 0 && <PdfModel images={urls} {...studentData}/>}
      </section>
  )
}