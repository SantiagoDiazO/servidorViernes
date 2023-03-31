export class ControladorReservas{
    constructor(){}

    registrarReserva(peticion,respuesta){
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
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando una reserva"
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