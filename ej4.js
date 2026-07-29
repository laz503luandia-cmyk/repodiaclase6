import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio unitario de el producto: ", function (precioUnitario) {
    rl.question("Ingrese la cantidad de productos: ", function (cantidad) {
        let precio = parseFloat(precioUnitario);
        let cantidadProductos = parseInt(cantidad);

        console.log(`El precio total de la compra es: ${precio * cantidadProductos}`);

        rl.close();
    });
})