const fs = require('fs').promises;

async function createFiles() {
  const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFilePromises = arrayStrings.map((string, index) => 
    fs.writeFile(`./file${index +1}.txt`, string)
  );
  Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((file) => fs.readFile(file, 'utf-8'))
  );

  const newFile = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFile);
}

createFiles();