descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el comando completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por su descripción', {
        descripcion
    })
    .help()
    .argv;


module.exports = {

    argv

}