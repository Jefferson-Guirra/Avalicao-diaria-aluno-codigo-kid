import { SelectOptions } from '@/components/form/select/SelectElement'

export const createOptionsClass = () => {
  const classRoom: SelectOptions = { value: 'Aula ', name: 'Aula '}
  const classRoomArray: Array<SelectOptions> = []
  classRoomArray.push({name: 'Escolha a aula', value: 'Escolha a aula'})
  for(let count = 1; count < 31; count++) {
    if(count < 10){
      classRoomArray.push( { name: classRoom.name + '0' + count, value: classRoom.value + '0' + count})
    } else{
      classRoomArray.push( { name: classRoom.name + count, value: classRoom.value + count})

    }

  }
  return classRoomArray
}


export const createOptionsEvaluations = (): SelectOptions[] => {
  const evaluations: SelectOptions[] = [{value: 'Escolha a nota', name: 'Escolha a nota'}]

  for(let count = 0 ; count <= 10; count++) {
    evaluations.push({ name: count * 10 +  '%', value: count * 10 +  '%'})
  }
  return evaluations
}