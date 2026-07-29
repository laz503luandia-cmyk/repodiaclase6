import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una longitud en metros: ", function (metros) {
    let metrosIngresados = parseFloat(metros);
    let centimetros = metrosIngresados * 100;
    
    console.log(`La longitud en centimetros es: ${centimetros}`);

    rl.close();
});