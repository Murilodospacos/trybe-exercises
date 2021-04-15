const myCountry = document.getElementById('country');

function countryBrazil() {
  const estadosBrasil = [
    'Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goías','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraíma','Santa Catarina','São Paulo','Sergipe','Tocantins'
  ]; 

  for (let index = 0; index < estadosBrasil.length; index += 1) {
    const country = document.createElement('option');
    myCountry.appendChild(country).innerText = estadosBrasil[index];
    myCountry.appendChild(country).value = estadosBrasil[index];
  }
}
countryBrazil();

