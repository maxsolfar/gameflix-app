const { Router } = require("express");
const videogamesRouter = require("./videogamesRoutes");
const videogameRouter = require("./videogameRoutes");
const genresRouter = require("./genresRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/videogame", videogameRouter);
router.use("/genres", genresRouter);



// Endware
router.use((error, req, res, next)=>{
    console.log(error);
    res.status(400).send({error:error}); 
})

module.exports = router;
