// Minha resolução
// const readline = require('readline-sync');

// function escolhaOScript() {
//   console.log(
//     'A melhor loja de Scripts:'
//   )
//   console.log('1 - Calcule o IMC')
//   console.log('2 - Arrisque um número e Tente ganhar o Sorteio')
//   console.log('3 - Descubra qual a velocidade em m/s')

//   const qualScript = readline.questionInt('Digite um número para escolher um Script: ')

//   if(qualScript === 1) {
//     return require('./imc')
//   } else if( qualScript === 2){
//     return require('./sorteio')
//   } else if( qualScript === 3) {
//     return require('./velocidade')
//   } 
//   console.log('Esse Script não existe, Digite o número Correto!')
//   escolhaOScript();
// }

// escolhaOScript();

// Gabarito - Fazendo testes
const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);
 
// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);