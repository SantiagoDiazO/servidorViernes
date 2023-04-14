import * as dotenv from 'dotenv'
dotenv.config()

import {API} from "./API.js"
let servidor = new API

//1. Despertar el servidor
servidor.despertarServidor()