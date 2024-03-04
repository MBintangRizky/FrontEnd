function faktorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    else {
      return n * faktorial(n - 1);
    }
  }

  const bilangan = parseInt(process.argv[2]);
  
  if (!isNaN(bilangan) && bilangan >= 0) {
    const hasil = faktorial(bilangan);
    console.log("Faktorial dari " + bilangan + " adalah " + hasil);
  }
  else {
    console.log("Bilangan harus positif");
  }