var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value); //this: campoFiltro, no caso
    var pacientes = document.querySelectorAll(".paciente"); //querySelectorAll: Array de elementos do HTML

    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i") // RegExp(texto da expressao(this.value), como queremos que a exp reg busque ("i")): expressoes regulares: procura em todo o texto o que vc está procurando

            //condicional que esconde os elementos diferentes do valor do campo de texto
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel"); //adiciona classe
            } else {
                paciente.classList.remove("invisivel");
            }
        }

    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});