const myCountry = document.getElementById('country'); // Capturando elemento html.

// Criando o campo de Estado dinamicamente.
function countryBrazil() {
  const estadosBrasil = [
    'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goías','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraíma','Santa Catarina','São Paulo','Sergipe','Tocantins'
  ]; 

  for (let index = 0; index < estadosBrasil.length; index += 1) {      // Pecorrendo o Array
    const country = document.createElement('option');                  // criando elemento.
    myCountry.appendChild(country).innerText = estadosBrasil[index];   // Adicionando elemento com o texto recebido do array
    myCountry.appendChild(country).value = estadosBrasil[index];       // Adicionado Elemento com o valor recebido do array
  }
}
countryBrazil();
//--------------------------------------------------------------------------------------------------------------------------


const mydate = document.getElementById('date').value;

function validateDate(mydate) {
  if (mydate.indexOf('/') === 2 || mydate.indexOf('/') === 5) {
    const day = mydate.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if((day > 0 && day <=31) && (month > 0 && month <=12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}