
var infotab = document.querySelector('#resultado');

var numb = prompt('Digite um numero');
numb = parseFloat(numb);

function calcular(simbulo){
    var numbDois = prompt('Digite o segundo numero');
    numbDois = parseFloat(numbDois);

    switch(simbulo){
        case '+':
        infotab.innerHTML = numb + numbDois;
        break;
        case '-':
        infotab.innerHTML = numb - numbDois;
        break;
        case '*':
        infotab.innerHTML = numb * numbDois;
        break;
        case '/':
        infotab.innerHTML = numb / numbDois;
        break;
        default: alert("Algo deu errado");
    }        
}    