import express from 'express'
import {rutas} from './routes/rutas.js'
import {establecerConexion} from './database/conexion.js'

export class API{
    constructor(){
        this.app = express() //App es express
        this.conectarBD()
        this.enrutarPeticiones()
    }
    despertarServidor(){
        this.app.listen(process.env.PORT, () => console.log("Servidor encendido..."))
    }
    enrutarPeticiones(){
        this.app.use(express.json())//Habilitar la recepcion de datos desde el body
        this.app.use('/', rutas)//Habilitamos las rutas o endpoints
    }
    conectarBD(){
        establecerConexion()
    }
}