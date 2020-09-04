const argv = require('./config/yargs').argv;
const porHacer = require('./operadores/modulo_principal');
const color = require('colors');

//Otra forma de cargar los requires
//const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea2 of listado) {

            console.log("=======POR HACER======".green);
            console.log(tarea2.descripcion);
            console.log('Estado: ', tarea2.completado);
            console.log("======================".green);

        }
        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;


    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no es reconocido');

}