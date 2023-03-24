import express from 'express'

//Para separar las rutas de la logica de noegocio
//Utilizare un metodo especial de EXPRESS

export let rutas = express.Router()

//Listado de servicios

//Habitaciones
rutas.post('/registrarhabitacion', function (req, res) {
    res.send('Estamos registrando la habitacion')
})

rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('Estamos buscando todas las habitacion')
})

rutas.get('/buscarhabitacion', function (req, res) {
    res.send('Estamos buscando una habitacion')
})

rutas.put('/actualizarhabitacion', function (req, res) {
     res.send('Estamos actualizando una habitacion')
})

//Reservas
rutas.post('/registrarreserva', function (req, res) {
    res.send('Estamos registrando una reserva')
})

rutas.get('/buscarreserva', function (req, res) {
    res.send('Estamos buscando una reserva')
})

rutas.get('/buscarreservas', function (req, res) {
    res.send('Estamos buscando todas las reservas')
})

rutas.put('/editarreserva', function (req, res) {
    res.send('Estamos editando una reserva')
})

rutas.delete('/eliminarreserva', function (req, res) {
    res.send('Estamos eliminando una reserva')
})