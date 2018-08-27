const fs = require('fs');

let listadoporhacer = [];
const gaurdarDB = () => {
    let data = JSON.stringify(listadoporhacer);
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('no se puedo grabar', err);
    });

}
const cargarDB = () => {
    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoporhacer.push(porHacer);
    gaurdarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoporhacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoporhacer.findIndex(tarea => tarea.descripcion = descripcion);
    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        gaurdarDB();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();

    let nuevolistado = listadoporhacer.filter(tarea => tarea.descripcion !== descripcion);
    //let index = listadoporhacer.findIndex(tarea => tarea.descripcion = descripcion);

    if (listadoporhacer.length !== nuevolistado.length) {
        listadoporhacer = nuevolistado;

        gaurdarDB();
        return true;
    } else {
        return false;
    }

}

const filtra = (completado) => {
    cargarDB();
    if (completado == 'true') {
        completado = true;
    } else {
        completado = false;
    }
    let nuevolistado = listadoporhacer.filter(tarea => tarea.completado === completado);
    //let index = listadoporhacer.findIndex(tarea => tarea.descripcion = descripcion);
    return nuevolistado;

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtra
}