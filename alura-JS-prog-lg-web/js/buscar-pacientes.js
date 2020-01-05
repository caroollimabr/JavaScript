var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest(); //NEW: mostra que é um novo objeto
    // XMLHttpRequest: objeto que faz requisições HTTP com o JS (o nome XML existe só pelo legado histórico, dados de diversos tipos podem ser trafegados)

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //open(métodoHTTP, endereço do servidor): configura a requisição que vc vai enviar (GET: envia através da URL, POST: envia mais escondido)

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {//Se a página existir
            erroAjax.classList.add("invisivel");// A classe pode modificar a forma como um elemento se comporta
            var resposta = xhr.responseText; //quando carregar, vai trazer a resposta dos dados em forma de texto 
            var pacientes = JSON.parse(resposta);//parse: transforma resposta em um array de objetos de json para objetos do JS

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else { //se a página der erro
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();

});

//Busca dados e mostra para o cliente
//API: interface de programação que disponibiliza funcionalidades
//JSON: JavaScript Object Notation

//AJAX: requisição com o JS de modo assíncrono (o fluxo do código não para quando a requisição é feita, a execução continua normalmente): busca os pacientes no servidor externo e é possível excluir e adicionar pacientes.