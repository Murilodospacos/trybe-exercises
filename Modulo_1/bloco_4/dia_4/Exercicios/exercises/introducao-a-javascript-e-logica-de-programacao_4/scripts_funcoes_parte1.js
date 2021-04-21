
function yesOrNopalindromo (word) {

  for(let i = 0; i < word.length; i += 1) {
    // for percorre todos caracteres

    //console.log(word[i] + word[word.length-1-i])
    // Primeira impressão imprime palavra da esquerda para direita e outro imprimi da direita para esquerda
    if(word[i] === word[word.length-1-i]) {
      // Se o primeiro caractere for igual aao ultimo caractere e durante o loop os otros caracteres forem iguais
      result = true;
      // resultado igual a true
    } else {
      // se os caracteres não forem iguais resultado igual false
      result = false;
    }
  }
  return result;// imprime resultado da lógica do if

}
console.log(yesOrNopalindromo('subinoonibus'));
