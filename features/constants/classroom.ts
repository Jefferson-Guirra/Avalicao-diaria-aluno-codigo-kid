import { SelectOptions } from '@/components/form/select/SelectElement'

export const createClassRoomArray = () => {
  const classRoom: SelectOptions = { value: 'Aula ', name: 'Aula '}
  const classRoomArray: Array<SelectOptions> = []
  classRoomArray.push({name: 'Escolha a aula', value: 'Escolha a aula'})
  for(let count = 1; count < 31; count++) {
    if(count < 10){
      classRoomArray.push( { name: classRoom.name + '0' + count, value: classRoom.value + count})
    } else{
      classRoomArray.push( { name: classRoom.name + count, value: classRoom.value + count})

    }

  }
  return classRoomArray
}