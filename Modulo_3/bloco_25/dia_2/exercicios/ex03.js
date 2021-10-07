function somaMultipica(param1, param2, param3){
  const promise = new Promise((resolve, reject) => {
    if(typeof(param1) !== "number" || typeof(param2) !== "number" || typeof(param3) !== "number")
    reject(new Error("Informe apenas números" ))
    
    const resultado = (param1 + param2) * param3
    if(resultado < 50){
      reject(new Error("Valor muito baixo"))
    } else if(resultado > 50){
      resolve(resultado)
    }
  });
  return promise;
}

// somaMultipica(2,3,5)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`))

  async function geraNumero(){
    try {
      const param1 = Math.floor(Math.random() * 100 + 1);
      const param2 = Math.floor(Math.random() * 100 + 1);
      const param3 = Math.floor(Math.random() * 100 + 1);
      const result = await somaMultipica(param1, param2, param3);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  geraNumero();
  console.log('murilo')
