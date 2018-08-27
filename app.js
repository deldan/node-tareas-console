//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listar = porHacer.getListado();

        for (let tarea of listar) {
            console.log('==== POR HACER ===='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================='.green);
        }
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    case 'filtrar':
        let filt = porHacer.filtra(argv.completado);
        console.log(filt);

        break;
    default:
        console.log('Comando no contemplado');

}