function idadep (){
    var ok = false;
    while (! ok){
    var idade = prompt("Digite sua idade: "); // var vai ser o que for solicitado ()
    if (idade > 0 && idade < 15){
        alert ("Você é uma criança");
        ok = true;
    } else if (idade >= 15 && idade < 30) { /*else if: caso um for correto, o prog. para de rodar. Se vc usar if, isso não acontece. */
        alert ("Você é jovem");
        ok = true;
    } else if (idade >= 30 && idade < 60) {
        alert ("Você é adulto");
        ok = true;
    } else if (idade >= 60 && idade < 200){
        alert ("Você é idoso");
        ok = true;
    } else {
        alert ("Idade inválida")
    } 
}
}
idadep()
