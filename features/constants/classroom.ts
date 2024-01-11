import { SelectOptions } from '@/components/form/select/SelectElement'

export const createClassRoomArray = () => {
  const classRoom: SelectOptions = { value: 'aula ', name: 'aula '}
  const classRoomArray: Array<SelectOptions> = []
  classRoomArray.push({name: 'Escolha a aula', value: 'Escolha a aula'})
  for(let count = 1; count < 31; count++) {
    classRoomArray.push( { name: classRoom.name + count, value: classRoom.value + count})
  }
  return classRoomArray
}