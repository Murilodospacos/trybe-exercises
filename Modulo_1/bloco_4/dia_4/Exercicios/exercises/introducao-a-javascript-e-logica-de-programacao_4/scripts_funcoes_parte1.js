
function yesOrNopalindromo (word) {

  for(let i = 0; i < word.length; i += 1) {
    console.log(word[i] + word[word.length-1-i])
    if(word[i] === word[word.length-1-i]) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result)

}

yesOrNopalindromo('ovo');

