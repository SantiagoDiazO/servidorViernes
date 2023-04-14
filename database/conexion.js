import mongoose from 'mongoose'

export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("Exito conectando a la BD")
    }catch(error){
        console.log("Fallo al conectar con la BD -  Errro: " + error)
    }
}