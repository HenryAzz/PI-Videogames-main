
const { Router } = require("express");
const {getVideoGame , getGame, getGenres, postVideoGames, getPlatforms} = require("./controllers.js")



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.get('/games', asdasd);

router.get("/videogames", getVideoGame);

router.get("/videogames/:idVideogame", getGame);

router.get("/genres", getGenres);

router.post("/videogames", postVideoGames);

router.get('/platforms', getPlatforms);

module.exports = {router};
