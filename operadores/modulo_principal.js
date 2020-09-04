//Importando FILE SYSTEM
const fs = require('fs');


let listadoPorHacer = [];


//Guarda la base de datos en formato JSON
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('database/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);

    });
}


//Carga la Base de Datos
const cargarDB = () => {

    try {

        listadoPorHacer = require('../database/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }


}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}



const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}


const borrar = (descripcion) => {
    cargarDB();
    let aborrar = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if (aborrar >= 0) {
        listadoPorHacer.splice(aborrar, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}