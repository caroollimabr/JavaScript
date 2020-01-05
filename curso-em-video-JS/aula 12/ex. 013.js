var agora = new Date()
var diaSem = agora.getDay() /* pega o dia da semana em forma de número: 
domingo = 0, segunda = 1 e sábado = 6*/
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda-feira')
        break
    case 2:
        console.log ('Terça-feira')
        break
    case 3:
        console.log ('Quarta-feira')
        break
    case 4:
        console.log ('Quinta-feira')
        break
    case 5:
        console.log ('Sexta-feira')
        break
    case 6:
        console.log ('Sábado')
        break
    default:
        console.log ('[ERRO] Dia inválido!')
        break
}
