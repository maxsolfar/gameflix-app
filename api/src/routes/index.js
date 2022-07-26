const { Router } = require("express");

const videogamesRouter = require("./videogamesRoutes");
const videogameRouter = require("./videogameRoutes");
const genresRouter = require("./genresRoutes");
const platformsRouter = require("./platformsRoutes");
const storesRouter = require("./storesRoutes");
const tagsRouter = require("./tagsRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/videogame", videogameRouter);
router.use("/genres", genresRouter);

router.use("/platforms", platformsRouter);
router.use("/stores", storesRouter);
router.use("/tags", tagsRouter);



// Endware
router.use((error, req, res, next)=>{
    console.log(error);
    res.status(400).send({error:error}); 
})

module.exports = router;
