import mongoose from 'mongoose'

const Schema = mongoose.Schema

//Construimos el esquema personalizando la informacion
const Reserva = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    },
    costoReserva:{
        type:Number,
        required:false
    }
})

export const modeloReserva = mongoose.model('reserva', Reserva)