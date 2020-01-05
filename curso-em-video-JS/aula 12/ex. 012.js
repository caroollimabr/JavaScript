var agora = new Date () //pega a data do servidor ou cliente
var hora = agora.getHours() //pega a hora do servidor ou cliente
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 12 && hora < 18) {
    console.log ('Boa tarde!')
} else if (hora < 12) {
    console.log ('Bom dia!')
} else {
    console.log('Boa noite!')
}