var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    /*botao.addEventListener("click", function(event){
     event.preventDefault();
 
     console.log(form.tarefa.value);
     //Código para adicionar na lista de tarefas
 });
 
 event.PreventDefault() - previne o comportamento padrão (evento de recarregar a página e apagar as informações) e realiza o que foi programado
 botao.addEventListener("click", funcao) OU botao.onclick = funcaosemparenteses : faz com que algo aconteça a partir do click
 
 botao.onmouseover = funcaosemparenteses OU botao.addEventListener("mouseover", funcao): faz com que algo aconteça quando o mouse estiver em cima do conteúdo;
 
 
 OUTRA OPÇÃO: criar uma função e chamá-la no event listener SEM PARENTESES depois da funcao: botaoAdicionar.addEventListener("click", enviarForm)*/

    var form = document.querySelector("#form-adiciona"); 
    // Extrai informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);


    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    };


    //valida formulário através de msgs de erro
    adicionaPacienteNaTabela(paciente);

    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // .innerHTML = "": recebe novo conteúdo; .innerHTML: obtemos o conteúdo do HTML interno

});

/*Boas práticas em JS:
-Se o código começar a ficar mt grande, crie outros arquivos .js de acordo com o que cada sequência de código faz;
-Se há um código a ser reutilizado, é bom fazer uma função e chamá-la sempre que for necessário, e não criar novas funções com o mesmo propósito;
-Quebre o código em funções com uma responsabilidade. Enxugue-o/organize-o sempre que puder (e que ele continue fazendo sentido/sendo legível);
 */

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value, // .value: guarda o valor
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

    /*Todo objeto tem propriedades - características que vão dentro dele  */
}

function montaTr(paciente) {
    // Cria a <tr> do paciente 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //adiciona class ao tr

    /*.createElement(): cria novo elemento (no caso, mais uma linha da tabela), como se vc estivesse no HTML */

    /*AppendChild(variavel ou funcao): 'coloque como filho', ou seja, colocar o elemento dentro de outro maior. No caso, <td> dentro de <tr> no HTML*/

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");// var.push(""): puxa o que está entre parênteses para o array  
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros; 
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //.innerHTML: controla o HTML interno de um elemento

    erros.forEach(function (erro) { //.forEach: para cada item do array, faça isso
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }); /*OUTRA OPÇÃO
        for (var i = 0; i < erros.length; i++){
        var erro = erros [i];
        
        }  */
}

function adicionaPacienteNaTabela(paciente){
    // Cria a <tr> e a <td> do paciente
   var pacienteTr = montaTr(paciente);
   // Adicionando o paciente na tabela
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr); /*AppendChild(variavel ou funcao): 'coloque como filho', ou seja, colocar o elemento dentro de outro maior. No caso, <td> dentro de <tr> no HTML*/
}


