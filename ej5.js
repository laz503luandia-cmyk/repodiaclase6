import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una cantidad de dinero en dolares: ", function (cantidadDolares) {
    let dolares = parseFloat(cantidadDolares);

    const tasaDeCambio = 0.88; 
    let euros = dolares * tasaDeCambio;

    console.log(`La cantidad en euros es: ${euros.toFixed(2)}`);

    rl.close();
});