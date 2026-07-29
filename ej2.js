import Readline from "node:readline";

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio del producto: ", function (precio) {
    rl.question("Ingrese el descuento: ", function (cantidad) { 

        let precioProducto = parseFloat(precio);
        let descuento = parseFloat(cantidad);

        console.log(`El precio final del producto es: ${precioProducto - (precioProducto * (descuento / 100))}`);

        rl.close();
    });
})