export class ControladorHabitaciones{
    constructor(){}

    registrandoHabitacion(peticion,respuesta){
        let datosHabitacion = peticion.body
        console.log(datosHabitacion)
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

    buscandoUnaHabitacion(peticion,respuesta){
        let idHabitacion = peticion.params.idHabitacion
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando una habitacion" + idHabitacion
            })
        }catch(errorPeticion){
            repuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    buscandoTodasHabitaciones(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito buscando habitaciones"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }

    editandoHabitacion(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje": "Exito editando los datos"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje": "Fallamos " + errorPeticion
            })
        }
    }
}