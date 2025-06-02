# Resolução do desafio 1 do curso *Lógica de programação: explore funções e listas*

## Funções

#### 2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

```js
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
```

#### 3. Crie uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for pressionado.
Em index.html adicionamos "verificarClique()":
```html
<button onclick="verificarClique()" class="button">Console</button>
```
Em app.js adicionamos a função:
```js
function verificarClique() {
    console.log('O botão foi clicado.');
}
```

#### 4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
Em index.html adicionamos "exibirAlerta()":
```html
<button onclick="exibirAlerta()" class="button">Alert</button>
```
Em app.js adicionamos a função:
```js
function exibirAlerta() {
    alert('Eu amo Js')
}
```

#### 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
Em index.html adicionamos "exibirPrompt()":
```html
<button onclick="exibirPrompt()" class="button">Prompt</button>
```
Em app.js adicionamos a função:
```js
function exibirPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${nomeCidade} e lembrei de você!`);  
}
```

#### 6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
Em index.html adicionamos "somaNumeros()":
```html
<button onclick="SomaNumeros()" class="button">Soma</button>
```
Em app.js adicionamos a função:
```js
function SomaNumeros() {
    alert('A seguir digite dois números para a realização da soma');
    let valor1 = parseInt(prompt('Digite um número inteiro'));
    let valor2 = parseInt(prompt('Digite outro número inteiro'));
    let resultado = valor1 + valor2;
    alert(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}`);
}
```
# Resolução do desafio 2 do curso *Lógica de programação: explore funções e listas*

## Funções e parâmetros

#### 1. Criar uma função que exibe "Olá, mundo!" no console.
```js
function exibirOla() {
    console.log('Olá, mundo!');
}

exibirOla();
```

#### 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
```js
function exibirOlaNome (nome) {
    console.log(`Olá, ${nome}`);
}

exibirOlaNome('Aurora');
```

#### 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
```js
function calcularDobro (numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(18);
console.log(resultadoDobro);
```

#### 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
```js
function mediaTresNumeros (a, b, c) {
    return (a + b + c) / 3;
}

let resultadoMedia = mediaTresNumeros(2, 4, 6);
console.log(resultadoMedia);
```

#### 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
```js
function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(16, 14);
console.log(maiorNumero);
```

#### 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
```js
function quadrado(numero) {
    return numero * numero;
}

let resultadoQuadrado = quadrado(8);
console.log(resultadoQuadrado);
```
