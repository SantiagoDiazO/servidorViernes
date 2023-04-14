export class ControladorReservas{
    constructor(){}

    registrarReserva(peticion,respuesta){
        let datosReserva = peticion.body
        console.log(datosReserva)
        try{
            respuesta.status(200).json({
                "mensaje": "Exito agregando los datos"
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    buscarUnaReserva(peticion,respuesta){
        let idReserva = peticion.params.idHabitacion
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando una reserva " + idReserva
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    buscarTodasReservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando reservas"
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    editarReserva(peticion,respuesta){
        let idReserva = peticion.params.idHabitacion
        let datosReserva = peticion.body
        try{
            respuesta.status(200).json({
                "mensaje": "Exito editando los datos"
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    eliminarReserva(peticion,respuesta){
        let idReserva = peticion.params.idHabitacion
        let datosReserva = peticion.body
        try{
            respuesta.status(200).json({
                "mensaje": "Exito eliminando los datos"
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }
}