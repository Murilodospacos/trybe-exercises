const fs = require('fs').promises;

const simpsonsFile = "./simpsons.json";

// 4.1
// fs.readFile(simpsonsFile, 'utf-8')
//   .then((data) => {
//     return JSON.parse(data)
//   })
//   .then((simpsons) => {
//     return simpsons.map(({id, name}) => console.log(`${id} - ${name}`));
//   })


// 4.2
// async function getSimpsonById(idm){
//   const simpsons = await fs
//     .readFile(simpsonsFile, 'utf-8')
//     .then((data) => JSON.parse(data));

//     const findIdSimpsons = simpsons.find((simpson) => Number(simpson.id) === idm )

//     if(!findIdSimpsons) {
//       throw new Error('id não encontrado');
//     }
//     return console.log(findIdSimpsons);
// }
// getSimpsonById(12);

// 4.3
// async function getSimpsonById(){
//   const simpsons = await fs
//     .readFile(simpsonsFile, 'utf-8')
//     .then((data) => JSON.parse(data));

//     const filterIdSimpsons = simpsons.filter((simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6 );
//     await fs.writeFile(simpsonsFile, JSON.stringify(filterIdSimpsons))
//     return console.log(filterIdSimpsons);
// }
// getSimpsonById();

//4.4
// async function filterSimpsons() {
//     const simpsons = await fs
//       .readFile(simpsonsFile, 'utf-8')
//       .then((fileContent) => JSON.parse(fileContent));

//       const filterIdSimpsons = simpsons.filter((simpson) => Number(simpson.id) > 0 && Number(simpson.id) <= 4 );
//       await fs.writeFile('./simpsonsFamily.json', JSON.stringify(filterIdSimpsons))
//       return filterIdSimpsons;
// }
// filterSimpsons();

//4.5
// const simpsonsFamilyFile = "./simpsonsFamily.json";

// async function filterSimpsons() {
//     const simpsons = await fs
//       .readFile(simpsonsFamilyFile, 'utf-8')
//       .then((fileContent) => JSON.parse(fileContent));
//       const newArray = simpsons.filter((simpson) => Number(simpson.id) > 0 && Number(simpson.id) <= 4 );
//       newArray.push({ "id": "8","name": "Nelson Muntz" });
//       await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray))
//       return console.log(newArray);
// }
// filterSimpsons();

//4.6
const simpsonsFamilyFile = "./simpsonsFamily.json";
function filterSimpsons() {
    return fs
      .readFile(simpsonsFamilyFile, 'utf-8')
      .then((fileContent) => JSON.parse(fileContent))
      .then((simpson) => simpson.filter((simpson) => simpson.id !== '8'))
      .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson'}]))
      .then((simpsonsWithMaggie) =>
      fs.writeFile(simpsonsFamilyFile, JSON.stringify(simpsonsWithMaggie)));
}
