import * as dotenv from 'dotenv'
dotenv.config()

import {API} from "./API.js"
console.log(process.env.PORT)
let servidor = new API

//1. Despertar el servidor
servidor.despertarServidor()