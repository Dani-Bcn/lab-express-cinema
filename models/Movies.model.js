const mongoose = require("mongoose")
const {Schema} =  mongoose //destructuración 
const showSchema = new Schema({ // definimos el modelo 

    title: String,//Definimos el tipo del valor
    director:String,
    stars:{
        type:[String]
    },
    image:String,
    description:String,
    showtimes:{
        type:[String]
    }
})

const Movie = mongoose.model("Movie", showSchema) //Creamos el modelo y los guardamos => Movie
module.exports = Movie //Exportamos el modelo 



