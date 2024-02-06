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
      ['Aula 01']: 'O estudante aprendeu sobre o universo da robótica e teve o primeiro contato com o kit de robótica utilizado para realizar as aulas. Ao decorrer da aula o estudante criou uma garra mecânica.',
      ['Aula 02']: 'O estudante aprendeu sobre os diferentes sitemas de alavanca, entendendo também as forças presentes no sitema. No decorrer da aula o aluno criou uma alavanca interfixa (balança).',
      ['Aula 03']: 'O estudante aprendeu sobre o torque, uma grandeza física associada ao movimento de rotação de um corpo e conheceu as engrenagens. Produziu no deccorrer da aula um projeto contendo engrenagens afim de entender o torque. ',
      ['Aula 04']: 'O estudante aprendeu sobre o semáforo e teve contato com o primeiro componente eletrônico do kit de robótica (LED), desenvolveu pela primeira vez a programação do projeto. No decorrer da aula o estudante criou e programou o projeto semáforo.',
      ['Aula 05']: 'O estudante aprendeu sobre o conceito e uso de sensores de luminosidade, tendo contato pela primeira vez com o sensor de luminosidade do kit de robótica. No decorrer da aula o estudante criou e programou o projeto poste de luz.',
      ['Aula 06']: 'O estudante aprendeu sobre o lançamento horizontal de objetos, entendendo todo o conceito de queda livre e movimento horizontal. Teve contato pela primeira vez com o componente eletrônico motor do kit de robótica. No decorrer da aula o estudante desenvolveu uma catapulta capaz de lançar horizontalmente objetos.',
      ['Aula 07']: 'O estudante aprendeu sobre o conceito e uso do sensor infravermelho, tendo contato pela primeira vez com o componente eletrônico sensor infravermelho do kit de robótica. No decorrer da aula desenvolveu e programou o projeto desviador de obstáculo, um carro capaz de desviar de obstáculos com o uso de sensores infravermelhos.',
      ['Aula 08']: 'O estudante aprendeu sobre o conceito e uso do servo motor, tendo contato pela primeira vez com o componente eletrônico servo motor do kit de robótica. No decorrer da aula o estudante desenvolveu e programou o projeto separador de bolinhas, capaz de separar bolinhas utilizando o servo motor.',
      ['Aula 09']: 'O estudante aprendeu sobre os diferentes tipos de energias renováveis e não renováveis. No deccorer da aula o estudante desenvolveu e programou o projeto moinho de vento.',
      ['Aula 10']: 'O estudante aprendeu sobre o conceito e uso do metrônomo, desnvolvendo e programando o projeto metrônomo no decorrer da aula.',
      ['Aula 11']: 'O estudante aprendeu sobre a força de contato entre corpos o atrito, entendendo todas as forças (Normal, Peso e atrito) que estão presente sempre que dois ou mais corpos estão em choque (contato). No decorrer da aula o estudante desenvolveu e programou o projeto detector de bordas, um carro capaz de detectar bordas. ',
      ['Aula 12']: 'O estudante aprendeu sobre o uso de robótica na construção civil, entendendo também o conceito e uso do exoesqueleto. No decorrer da aula o aluno desenvolveu e programou o projeto guindaste, capaz de erguer objetos com o comando de botões.',
    },
    ["Fase 02"]:{
      ['Aula 01']: 'O estudante aprendeu sobre o conceito e uso da energia solar. No decorrer da aula o estudante criou o projeto carro solar, capaz de se movimentar apenas quahndo há luminosidade.',
      ['Aula 02']: 'O estudante aprendeu sobre o conceito e uso da pneumática, ciência que estuda o uso do gás ou ar pressurizado.No deccorrer da aula o estudante criou o projeto empilhadeira que utiliza o ar comprimido de seringas para emilhar objetos.',
      ['Aula 03']: 'O estudante aprendeu sobre o conceito de força, entendo afundo as características de uma grandeza vetorial (módulo, direção e sentido). Ao decorrer da aula o estudante criou o projeto da garra robô, que utiliza o conceito de força para movimentação.',
      ['Aula 04']: 'O estudante aprendeu o conceito e uso dos diferentes tipos de sistema de seguranças (mecânicos e eletrônicos). No decorrer da aula o aluno dessenvolveu o projeto cofre, que só aberto apertando a sequêcia correta de botões.',
      ['Aula 05']: 'O estudante aprendeu sobre o conceito e aplicação do movimento retilíneo uniforme. No decorrer da aula o aluno produzio o projeto radar de velocidade, o qual emite um sinal vermelho e alarme para objetos acima da velocidade permitida.',
      ['Aula 06']: 'O estudante aprendeu sobre o conceito e aplição da aceleração. No decorrer da aula o estudante desenvolveu o projeto carro dragster que entra no estado de aceleração ao apertar no botão.',
      ['Aula 07']: 'O estudante aprendeu sobre conceito e diferenças entre frquência e período, entendendo os tipos de unidade de medida para cada movimento. No deccorrer da aula o estudante desenvolveu o projeto relógio que emite um alarme quando completado uma volta.',
      ['Aula 08']: 'O estudante entendeu o conceito e aplicação de sistemas de identificação por rádio frequência, produzindo no decorrer da aula o projeto cancela, que abrirá apenas quando uma identificação for validada.',
      ['Aula 09']: 'O estudante aprendeu o conceito e particularidades das notas musicais. No decorrer da aula o estudante criou o projeto piano, que emite diferentes sons ao se aproximar dos sensores infravermelhos.',
      ['Aula 10']: 'O estudante entendeu o conceito e aplicação das 3 leis de Newton (Lei da Inércia, Princípio Fundamental da Dinâmica e Lei da Ação e Reação). No decorrer da aula o estudante produzio o projeto de um robô que testa os princípios da ação e reação.',
      ['Aula 11']: 'O estudante entendeu o conceito e funcionalidade dos elevadores. No decorrer da aula o estudante produziu o projeto elevador, que se move a partir de requisições feitas com o botão.',
      ['Aula 12']: 'O estudante entendeu sobre o conceito, aplicação e diferenças das forças centrífuga e centrípeda, entendendo quando cada uma age em um movimento circular. No decorrer da aula o estudante produziu o projeto chapéu mexicano que utiliza das forças centrífuga e centrípeda para realizar movimento.',
    },
    ["Fase 03"]:{
      ['Aula 01']: 'O estudante entendeu o conceito e aplicação da energia potencial gravitacional(EPG). No decorrer da aula o estudante produziu o projeto rampa, afim de entender a ação dessa energia (EPG).',
      ['Aula 02']: 'O estudante entedeu o conceito e aplicação de turbinas eólicas, produzindo no deccorrer da aula o projeto turbina eólica, na qual utilizamos os motores e jumpers para que a turbina receba energia por um motor e transfira para outro.',
      ['Aula 03']: 'O estudante entedeu sobre aplicação de força em uma determinada superfície (pressão), apredendo que esta grandeza é diretamente proporcional a força aplicada e inversamente proporcional á área em que ela está sendo exercida. No decorrer da aula o estudande produziu uma estrutura que executa uma espécie de chute ao pressionar o pedal.',
      ['Aula 04']: 'O estudante aprendeu sobre a força da gravidade, entendendo suas características como a força peso que atua sobre todo objeto. No decoorrer da aula o estudante produziu uma balança  com indicadores para informar qual dos lados está mais pesado.',
      ['Aula 05']: 'O estudante conheceu o conceito de automação de tarefas. No decorrer da aula produziu um robô capas de remover obstáculos e seguir seu trajeto.',
      ['Aula 06']: 'O estudante aprendeu sobre a importância da segurança, entendedo os diferentes sensores utilizados para a proteção. No decorrer da aula o estudante produziu um alarme que será ativado ao detectar a presença de algum objeto.',
      ['Aula 07']: 'O estudante aprendeu o conceito e aplicação da energia cinética. No decorrer da aula produziu o projeto carro de corrida que é controlado por botões.',
      ['Aula 08']: 'O estudande aprendeu sobre o coceito e particularidade dos diferentes tipos de colisões ( elásticas, inelásticas, perfeitamente inelaśticas, parcialmente inelásticas) que ocorrem quando dois objetos se chocam. No decorrer da aula o estudante produziu uma bola de demolição, onde é possível testar como derrubar diversos objetos com uso dos princípios de colisão.',
      ['Aula 09']: 'O estudante aprendeu sobre os tipos, uso e aplicações de polias. No decorrer da aula o estudante desenvolveu o projeto ponte elevadiça que utiliza de polias parar subir e abaixar.',
      ['Aula 10']: 'O estudante aprendeu sobre o movimento circular, entendendo todas as suas particularidades bem como suas grandezas. No decorrer da aula o estudante produziu o projeto roda gigante que simula o movimento circular.',
      ['Aula 11']: 'O estudante aprendeu sobre o conceito e aplicação do centro de massa (ponto que se comporta como se toda a massa de um corpo estivesse concentrada sobre ele). No decorrer da aula o estudante produziu o robô equilibrista, cujo o centro de massa permite que ele ande sem cair.',
      ['Aula 12']: 'O estudante aprendeu sobre o conceito e aplicação dos diferentes tipos de sistemas de localização e orientação(sistemas analógicos e digitais). No decorrer da aula o estudante produziu o robô stalker que é capaz de seguir um alvo que os sensores detectam.',
    },
    ["Fase 04"]:{
      ['Aula 01']: 'O estudante aprendeu sobre a automação de tarefas com robótica. No deocrrer da aula o estudante criou o projeto braço robótico.',
      ['Aula 02']: 'O estudante aprendeu a importância dos sensores na robótica. No decorrer da aula o estudante criou um carro com 3 sensores capaz de seguir um percurso marcado por uma linha.',
      ['Aula 03']: 'O estudante aprendeu sobre os instrumentos musicais digitais, entendendo o funconamento do teremim. No decorrer da aula o estudante produziu o instrumento musical digital teremim capaz de emitir som utilizando potenciômetro, speaker e sensores infravermlhos.',
      ['Aula 04']: 'O estudante aprendeu sobre automção residencial, criando  o deccorer da aula uma casa automatizada que funciona através de sensores.',
      ['Aula 05']: 'O estudante aprendeu sobre aplicação da robótica na odontologia, criando no decorrer da aula o projeto cadeira odontológica que funciona por meio de sensores e um potenciômetro.',
      ['Aula 06']: 'O estudante aprendeu sobre as difrentes memórias (volátil e não volátil) e seus tipos (primária e secundária). No decorrer da aula o estudante desenvolveu um robô capaz de gravar comandos e depois executa-lo como programado.  ',
      ['Aula 07']: 'O estudante aprendeu sobre o uso da matemática na robótica. No decorrer da aula o estudante criou um robô capaz de detectar um obstáculo, contorná-lo e continuar seguindo em frente, tudo isso feito com o uso de equações matemáticas.',
      ['Aula 08']: 'O estudante aprendeu sobre os labirintos e sua importância na aprendizagem de diversos algoritmos de soluçãos de problemas. No decorrer da aula o estudante produziu um robô que através dos seus sensores, tentará encontrar a saída de um pequeno labirinto.',
      ['Aula 09']: 'O estudante teve contanto mais profundo com a programação, aprendendo o conceito de listas, threads e funções. No decorrer da aula o estudante criou um robô genius que tem o propósito de memorização de cores e sons.',
      ['Aula 10']: 'O estudante aprendeu o conceito e aplicação de circuitos lógicos, entendendo seus diferentes componentes (and e or) e circuitos. No decorrer da aula o estudante criou um robô que utiliza do circuito combinacional para ter uma respostas diferente dependendo das entradas selecionadas.',
      ['Aula 11']: 'O estudande aprendeu sobre o processo de envio de informações, ententeu também a importância e conceito de codificação. No decorrer da aula o estudante desenvolveu um telégrafo capaz de emitir mensagens em código morse.',
      ['Aula 12']: 'O estudante aprendeu sobre o uso de engrenagens em automóveis, entendo a funçao e conceito das marchas. No decorrer da aula o estudante desenvolveu um robô que por meio de botões e um potenciômetro simula o aumento da velocidade e necessidade de troca da macha de um carro.',
    }
  }
} 