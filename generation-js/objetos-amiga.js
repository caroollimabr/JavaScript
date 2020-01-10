var amiga = {
    //Atributos do objetos
    nome: "Carol",
    sobrenome: "Lima",
    idade: 30,
    altura: 1.65,
    

    //Comportamentos/Métodos do Objeto
    codar: function() {
        console.log("Comendo - " + this.nome);

        console.log("Arrumar-se");
        console.log("Pegar o ônibus");
        console.log("Codar");
    },

    irParaCasa: function() {
        console.log("Abrir a porta");
        console.log("Pegar o ônibus");
        console.log("Ir para casa");
    }
}

//Acessando propriedades do Objeto
console.log(amigo["nome"] + " " + amigo.altura);

amigo.ensinar();

amigo.irParaCasa();