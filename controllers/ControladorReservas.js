import { ServicioReservas } from "../services/ServicioReservas.js"

export class ControladorReservas{
    constructor(){}

    async registrarReserva(peticion,respuesta){
        let datosReserva = peticion.body
        let servicioReserva = new ServicioReservas()
        try{
            await servicioReserva.registrarReserva(datosReserva)
            respuesta.status(200).json({
                "mensaje": "Exito agregando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    async buscarUnaReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        let servicioReserva = new ServicioReservas()
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando una reserva " + idReserva,
                "reserva":await servicioReserva.buscarReserva(idReserva)
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    async buscarTodasReservas(peticion,respuesta){
        let servicioReserva = new ServicioReservas()
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando reservas",
                "reservas":await servicioReserva.buscarTodasReservas()
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    async editarReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        let servicioReserva = new ServicioReservas()
        try{
            await servicioReserva.ediarReserva(idReserva, datosReserva)
            respuesta.status(200).json({
                "mensaje": "Exito editando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    async eliminarReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        let servicioReserva = new ServicioReservas()
        try{
            await servicioReserva.eliminarReserva(idReserva)
            respuesta.status(200).json({
                "mensaje": "Exito eliminando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }
}