let info = {
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


