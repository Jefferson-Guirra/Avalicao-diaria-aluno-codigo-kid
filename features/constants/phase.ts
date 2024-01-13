import { SelectOptions } from '@/components/form/select/SelectElement'

export interface  Phases{
  Robótica: Array<SelectOptions>,
  'Analista de tecnologia': Array<SelectOptions>
}

export const phases: Phases ={
  ['Robótica']: [
  { name: 'Escolha a fase', value: 'Escolha a fase'},
  { name: 'fase 01', value: 'fase 01'},
  { name: 'fase 02', value:'fase 02' },
  { name: 'fase 03', value:'fase 03' },
  { name: 'fase 04', value:'fase 04' }
],
  ['Analista de tecnologia']: [
  { name: 'Escolha a fase', value: 'Escolha a fase'},
  { name: 'introdução a informática', value: 'introducao a informatica'},
  { name: 'windos 11 essencial', value: 'windows 11 essencial'},
  { name: 'windows 11 avançado', value: 'windows 11 anvancado'},
  { name: 'word essencial', value: 'word essencial'},
  { name: 'word avançado', value: 'word avancado'},
  { name: 'PowerPoint essencial', value: 'PowerPoint essencial'},
  { name: 'PowerPoint avançado', value: 'PowerPoint avançado'},
  { name: 'Excel essencial', value: 'Excel essencial'},
  { name: 'Excel intermediário', value: 'Excel intermediario'},
  { name: 'Excel avançado', value: 'Excel avançado'},
  { name: 'Outlook essencial', value: 'Outlook essencial'},
  { name: 'Outlook avançado', value: 'Outlook avancado'}
]
} 