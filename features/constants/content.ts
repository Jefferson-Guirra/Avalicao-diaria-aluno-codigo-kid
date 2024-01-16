interface ClassRoom {
  ['Aula 01']: string,
  ['Aula 02']: string,
  ['Aula 03']: string,
  ['Aula 04']: string,
  ['Aula 05']: string,
  ['Aula 06']: string,
  ['Aula 07']: string,
  ['Aula 08']: string,
  ['Aula 09']: string,
  ['Aula 10']: string,
  ['Aula 11']: string,
  ['Aula 12']: string,
}
interface Content {
  Robótica: {
    ['Fase 01']:ClassRoom,
    ['Fase 02']:ClassRoom,
    ['Fase 03']:ClassRoom,
    ['Fase 04']:ClassRoom
  }
}




export const contentPhases: Content = {
  Robótica: {
    ["Fase 01"]:{
      ['Aula 01']: 'aula 01 fase 01',
      ['Aula 02']: 'aula 02 fase 01',
      ['Aula 03']: 'aula 02 fase 01',
      ['Aula 04']: 'aula 03 fase 01',
      ['Aula 05']: 'aula 04 fase 01',
      ['Aula 06']: 'aula 05 fase 01',
      ['Aula 07']: 'aula 06 fase 01',
      ['Aula 08']: 'aula 07 fase 01',
      ['Aula 09']: 'aula 08 fase 01',
      ['Aula 10']: 'aula 09 fase 01',
      ['Aula 11']: 'aula 10 fase 01',
      ['Aula 12']: 'aula 11 fase 01',
    },
    ["Fase 02"]:{
      ['Aula 01']: 'aula 01 fase 02',
      ['Aula 02']: 'aula 02 fase 02',
      ['Aula 03']: 'aula 03 fase 02',
      ['Aula 04']: 'aula 04 fase 02',
      ['Aula 05']: 'aula 05 fase 02',
      ['Aula 06']: 'aula 06 fase 02',
      ['Aula 07']: 'aula 07 fase 02',
      ['Aula 08']: 'aula 08 fase 02',
      ['Aula 09']: 'aula 09 fase 02',
      ['Aula 10']: 'aula 10 fase 02',
      ['Aula 11']: 'aula 11 fase 02',
      ['Aula 12']: 'aula 12 fase 02',
    },
    ["Fase 03"]:{
      ['Aula 01']: 'aula 01 fase 03',
      ['Aula 02']: 'aula 02 fase 03',
      ['Aula 03']: 'aula 03 fase 03',
      ['Aula 04']: 'aula 04 fase 03',
      ['Aula 05']: 'aula 05 fase 03',
      ['Aula 06']: 'aula 06 fase 03',
      ['Aula 07']: 'aula 07 fase 03',
      ['Aula 08']: 'aula 08 fase 03',
      ['Aula 09']: 'aula 09 fase 03',
      ['Aula 10']: 'aula 10 fase 03',
      ['Aula 11']: 'aula 11 fase 03',
      ['Aula 12']: 'aula 12 fase 03',
    },
    ["Fase 04"]:{
      ['Aula 01']: 'aula 01 fase 04',
      ['Aula 02']: 'aula 02 fase 04',
      ['Aula 03']: 'aula 03 fase 04',
      ['Aula 04']: 'aula 04 fase 04',
      ['Aula 05']: 'aula 05 fase 04',
      ['Aula 06']: 'aula 06 fase 04',
      ['Aula 07']: 'aula 07 fase 04',
      ['Aula 08']: 'aula 08 fase 04',
      ['Aula 09']: 'aula 09 fase 04',
      ['Aula 10']: 'aula 10 fase 04',
      ['Aula 11']: 'aula 11 fase 04',
      ['Aula 12']: 'aula 12 fase 04',
    }
  }
} 