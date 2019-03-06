const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else { resolve(`tablas/tabla-${base}.txt`); }
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log(`========= Tabla de ${base} ===========`.green);


    for (let i = 1; i <= limite; i++) {
        console.log(colors.bgMagenta(`${base} * ${i} = ${base * i}`));
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}