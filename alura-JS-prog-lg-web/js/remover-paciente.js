var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){//!!!!!!!!event bubbling: o comando sobe para o elemento pai e o solicitado sempre ocorre sem que seja necessário configurar tudo manualmente
    event.target.parentNode.classList.add("fadeOut"); //parentNode: pai de qualquer nó do HTML
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);//remove elemento depois de 500 milisegundos

    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; -- !!!!!!!!!!TR = paciente = remover-paciente
    paiDoAlvo.remove();

    
    event.target.parentNode.remove(); (!!!!!!!o target é o paciente) */
});

/*  pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ // !!!!!!!!!!!dblclick: double click
    this.remove(); //!!!!!!!!!!!this é o dono do evento (paciente)
    });
});   */


 