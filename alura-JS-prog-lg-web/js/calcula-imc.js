/*Alert: aparece mensagem no console do servidor. Você consegue chamar essa função no console tb.
DOM: representação do html no nosso JavaScript Ex. document.write*/
var titulo = document.querySelector(".titulo");
/*queryselector: procura o termo entre parênteses. Pode ser executado no console. Pode ser usado 

document.querySelector(".titulo") indicação de classe

console.log(titulo);
console.log(titulo.textContent); ----- textContent: dá o conteúdo da tag solicitada*/

titulo.textContent = "Fulana Nutricionista"; // Muda o conteúdo de h1	

var pacientes = document.querySelectorAll(".paciente"); /*!!!!!!!!!!querySelectorAll: Retorna todos os elementos da classe */

/*!!! var titulo = document.querySelector("h1");
console.log(titulo.classList); == CLASSLIST EXIBE ARRAY COM TODAS AS CLASSES

var titulos = document.querySelectorAll("h2");

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo"); === OS H2 PASSAM A TER A CLASSE 'TITULO' 

!!!!!!!console.log(pacientes.length) ---- length: diz o tamanho do array*/

for (var i = 0; i < pacientes.length; i++) { /*!!!!!!!! loop de repetição: vai passar por todo o conteúdo e  buscar o paciente que eu preciso*/

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); //# - id, . - class
    var peso = tdPeso.textContent; /*textContent modificou o conteúdo da tabela*/

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (! pesoValido) { // if (peso <= 0 || peso >= 1000)
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido"; // vai mostrar na tabela
        paciente.classList.add("paciente-invalido"); // !!! ADICIONA CLASSE PARA MODIFICAR INFORMAÇÕES MAIS FACILMENTE
        /*!!! paciente.style.backgroundColor = "lightcoral";*/
    }

    if (! alturaValida) { // if (altura <= 0 || altura >= 3.00)
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
        /*paciente.style.backgroundColor = "lightcoral"; - CSS no JavaScript*/
    }

    if (alturaValida && pesoValido) {

        var imc = calculaImc(peso, altura);

        tdImc.textContent = imc; 
    
    }


}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso/(altura*altura);

    return imc.toFixed(2);
        
    /*variavel.toFIxed(2): traz o num com a qte de casas decimais solicitadas
    peso.toFixed(2) (retorna 65.00, por ex)*/
}

function validaPeso (peso){
    if (peso >=0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}
