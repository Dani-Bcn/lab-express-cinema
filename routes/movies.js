var express = require('express');
var router = express.Router();
const Movie = require("../models/Movies.model")// importamos el modelo 



//Creamos base de datos y enviamos los  valores

           // obtenemos la ruta de (var moviesRouter = require('./routes/movies'))  en app.js
router.post('/', async(req, res, next)=> {
    const {title, director, stars, image, description, showtimes}=req.body   // deconstruimos 
    try{
        const movies = await Movie.create({title, director, stars, image, description, showtimes})// Creamos la base de datos y enviamos los valores
        console.log(req.body);// con el metodo post, utilizaremos body
        res.redirect("/movies")//redirect trabaja globalmente, hay que indicar la ruta
   
    }catch(error){
        next (Error)
    }
   });
//-------------------------------------------------------------

//Mostrar los datos por pantalla

                // obtenemos la ruta de (var moviesRouter = require('./routes/movies')) 
   router.get("/", async (req,res,next)=>{
    try{
         const movies = await Movie.find({}) //find => si está vacio => nos devuleve todo lo encontrado en la db, devuelve un array
         console.log(movies)
       res.render("showMovies", { movies })
                //archivo hbs    //constante movies de arriba => lo pasamos entre corchetes porque es un array

    }catch(error){
        next (error)
    }
      
   })
   //-----------------------------------

   //buscar por id y mostrar los datos

                   //busqueda dinámica   =>  :idMovie
      router.get("/:idMovie", async (req, res, next)=>{
        const {idMovie} = req.params //guardamos en idMovie lo que nos pasan por ("/:idMovie")
        
    try{
         const movie = await Movie.findById(idMovie) //findById => busca el id que le pasamos , devuleve un String
         console.log(movie)
       res.render("infoMovie", movie )
                //archivo hbs    //constante movies de arriba => al ser ya un string no va entre corchetes

    }catch(error){
        next (error)
    }
      
   })

module.exports = router;
 