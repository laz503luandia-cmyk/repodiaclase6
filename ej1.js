import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre de el empleado: ", function (nombre) {
    rl.question("Ingrese las horas trabajadas: ", function (horas) {
        rl.question("Ingrese el valor por hora: ", function (pago) {

            let horasTrabajadas = parseFloat(horas);
            let pagoHora = parseFloat(pago);

            console.log(`El empleado ${nombre} tiene un salario de: ${horasTrabajadas * pagoHora}`);

            rl.close();

        });
    });

});