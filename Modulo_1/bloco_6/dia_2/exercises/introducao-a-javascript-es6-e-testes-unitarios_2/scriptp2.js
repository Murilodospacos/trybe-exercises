const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1 parte 2 

const addTurno = (obj, key, value) => {
  obj[key] = value;
  return lesson2;
}
console.log(addTurno(lesson2, "Turno", "manhã"));

// Exercicio 2 parte 2

const listKeys = (obj1) => {
  
}
console.log(listKeys(lesson1)); 