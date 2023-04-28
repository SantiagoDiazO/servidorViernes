import { ServicioReservas } from "../services/ServicioReservas.js"
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js"

export class ControladorReservas{
    constructor(){}

    async registrarReserva(peticion,respuesta){
        let datosReserva = peticion.body
        let servicioReserva = new ServicioReservas()
        let servicioHabitaciones = new ServicioHabitaciones()
        try{
            let habitacion = await servicioHabitaciones.buscarHabitacion(datosReserva.idHabitacion)
            if(habitacion){
                let diferencia = new Date(datosReserva.fechaFinal).getTime() - new Date(datosReserva.fechaInicio).getTime()
                if(diferencia >= 0){
                    let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24
                    datosReserva.costoReserva = diasDeDiferencia * habitacion.precioNoche
                    await servicioReserva.registrarReserva(datosReserva)
                    respuesta.status(200).json({
                        "mensaje": "Exito agregando los datos"
                    })
                }else{
                    respuesta.status(200).json({
                        "mensaje": "Fecha invalida, fecha inicio es superior a fecha final"
                    })
                }
            }else{
                respuesta.status(400).json({
                    "mensaje": "error buscar reserva"
                })
            }
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