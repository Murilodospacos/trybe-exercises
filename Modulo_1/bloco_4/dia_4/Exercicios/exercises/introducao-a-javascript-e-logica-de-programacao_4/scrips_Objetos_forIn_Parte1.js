/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'sim';

console.log(info);

for(var index in info) {
  console.log(index);
}

for( var i in info) {
  console.log(info[i])
}
*/

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim';
};


let infoMore = {
  personagem: 'Tio Patinhas',
  origem: "Cristmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for(let index in info) {
  
  if(info[index] === info.recorrente && info[index] === 'Sim' && infoMore[index] ==='Sim') {
    info.recorrente = 'Ambos recorrentes';
  } else {
    console.log(info[index] + ' e ' + infoMore[index]);
  }
}