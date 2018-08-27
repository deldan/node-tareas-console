const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const argv = require('yargs')
    .command('crear', 'Crear elemento', opts)
    .command('borrar', 'Borrar elemento', opts)
    .command('listar', 'Listar todos los elementos', opts)
    .command('filtrar', 'Actualiza el estado de un elemento', {
        descripcion: {
            demand: false,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }

    })
    .command('actualizar', 'Actualiza el estado de un elemento', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}