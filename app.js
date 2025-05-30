let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole() {
    console.log('O botão foi clicado.');
}

function exibirAlerta() {
    alert('Eu amo Js')
}

function exibirPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${nomeCidade} e lembrei de você!`);  
}

function SomaNumeros() {
    alert('A seguir digite dois números para a realização da soma');
    let valor1 = parseInt(prompt('Digite um número inteiro'));
    let valor2 = parseInt(prompt('Digite outro número inteiro'));
    let resultado = valor1 + valor2;
    alert(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}`);
}