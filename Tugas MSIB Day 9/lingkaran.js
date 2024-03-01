const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jari-jari lingkaran: ', (radius) => {
  // Menghitung luas lingkaran
  const area = Math.PI * radius * radius;

  console.log(`Luaslingkarandenganjari-jari ${radius} adalah: ${area.toFixed(2)}`);

  rl.close();
});;