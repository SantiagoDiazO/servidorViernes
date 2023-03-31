import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitaciones()
let controladorReservas = new ControladorReservas()

//Para separar las rutas de la logica de noegocio
//Utilizare un metodo especial de EXPRESS

export let rutas = express.Router()

//Listado de servicios

//Habitaciones
rutas.post('/registrarhabitacion', controladorHabitacion.registrandoHabitacion)

rutas.get('/buscarhabitaciones', controladorHabitacion.buscandoTodasHabitaciones)

rutas.get('/buscarhabitacion/:idhabitacion', controladorHabitacion.buscandoUnaHabitacion)

rutas.put('/actualizarhabitacion/:idhabitacion', controladorHabitacion.editandoHabitacion)

//Reservas
rutas.post('/registrarreserva', controladorReservas.registrarReserva)

rutas.get('/buscarreservas', controladorReservas.buscarTodasReservas)

rutas.get('/buscarreserva/:idreserva', controladorReservas.buscarUnaReserva)

rutas.put('/editarreserva/:idreserva', controladorReservas.editarReserva)

rutas.delete('/eliminarreserva/:idreserva', controladorReservas.eliminarReserva)