var amigo = {
    nome: "Carol",
    idade: 29,
    altura: 1.65,
    sexo: "F",

andar: function(){
    console.log (this.nome + " está andando.")
},

programar: function(){
    console.log (amigo.nome + " está programando.")
},

traduzir: function(){
    console.log (amigo.nome + " está andando.")
},
}
amigo.andar()
amigo.programar()
amigo.traduzir()
console.log (`${amigo["nome"]} tem ${amigo.idade} anos.`) //lê automaticamente a variável, objeto, etc