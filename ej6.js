const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, ingresa un dato cualquiera: ', (datoIngresado) => {

    const resultadoParseFloat = parseFloat(datoIngresado);
    const resultadoIsNaN = isNaN(resultadoParseFloat);

    console.log('\n--- Resultados ---');
    console.log('• El dato ingresado por el usuario:', datoIngresado);
    console.log('• El resultado obtenido al utilizar parseFloat():', resultadoParseFloat);
    console.log('• El valor retornado por isNaN():', resultadoIsNaN);

    rl.close();
});