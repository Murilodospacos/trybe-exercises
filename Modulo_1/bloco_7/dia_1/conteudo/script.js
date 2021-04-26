// Teste 1 - Tente rodar a função userInfo no seu editor de código. Nesse caso, a variável userEmail foi declarada dentro do escopo da função userInfo . Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro dizendo que userEmail não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o let por var e const ? Não deixe de fazer esse teste! Você verá que nos três casos, não temos acesso à variável fora do escopo da função userInfo .

function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  
}
userInfo();
console.log(userEmail);

// Teste 2 - Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const . Qual será o resultado? Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o var pode confundir até mesmo programadores mais experientes.

if (true) {
  // inicio do escopo do if
  let userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// teste 3 - Outro grande problema ao utilizar o var para atribuir valor à variáveis é que você consegue sobrescrevê-las sem gerar erros. Experimente executar o exemplo anterior usando o let e const e veja o que acontece!

var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

// teste 4 - E quanto ao const , como ele se diferencia do let ? O const permite com que você declare constantes . Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let , podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o const e let e veja o que acontece!

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

// teste 5 - No exemplo acima, vimos que o const é imutável - ao declarar const favoriteLanguage = "Javascript o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:

const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

// Obs: Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro

// Templete Literals - A sintaxe do template literals pede para usarmos o sinal de crases no início e no final da frase, e variáveis dentro de um ${...} . Você também pode adicionar uma expressão dentro das chaves, como ${a + b} . 

const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// Arrow functions -arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. 
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :

const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Quando não há nada no corpo da função e apenas um valor é retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => "Lucas";
console.log(printName());

/* Obs: Mas lembre-se que podemos omitir os parênteses apenas em dois cenários:
Quando não passamos nenhum parâmetro para a função, como no exemplo acima;
Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:
*/
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
