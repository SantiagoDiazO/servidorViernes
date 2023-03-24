import * as dotenv from 'dotenv'
import {API} from "./API.js"
console.log(process.env)
let servidor = new API

//1. Despertar el servidor
servidor.despertarServidor()