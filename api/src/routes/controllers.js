const { apiFetch, genres, createPost, platforms, endPoint } = require("./help.js");
const { Videogame, Genres } = require("../db.js");
const { YOUR_API_KEY } = process.env;
const URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;


// Devuelve todos los juegos, si hay query.name devuelve un tope de 15 juegos.
const getVideoGame = async function (req, res) {
  const gamesApi = await apiFetch(URL);
  const db = await Videogame.findAll();
  const gamesTotales = db.concat(gamesApi);
  let { name } = req.query;

  try {
   
    if (name !== undefined) {
      let str = name.toLowerCase();
      //recorro todos los juegos trayendo las 15 coincidencias.
      const quer = gamesTotales
        .filter(function (e) {
          if (e.name.indexOf(str) !== -1) return e;
        })
        .slice(0, 15);

      return res.json(quer);
    }

    return res.json(gamesTotales);
  
  } catch (error) {
    res.status(404).send(error);
  }
};

//Devuelve un solo juego con sus propiedades recibido por params
const getGame = async function (req, res) {
  const { idVideogame } = req.params;
  
  let URL2 = `https://api.rawg.io/api/games/${idVideogame}?key=adc85d9a1803405fb9fcaa63fb159019`
  
  try {
    
    let game = await endPoint(URL2);
    return res.send(game)
    
  } catch (error) {
    res.status(404).send(error);
  }
};

const getGenres = async function (req, res) {
  try {
    console.log(1)
    const genresTrue = await Genres.findAll()
    if(genresTrue > 1) return res.json(genresTrue);
    const api = await apiFetch(URL);
    
    const genFilter = await genres(api);
    
    genFilter.map((g) => Genres.create(g));
    
    res.json(genFilter);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const postVideoGames = async function (req, res) {
  console.log("1")
  try {
    const create = await createPost(req.body);
    res.send(create);
  } catch (error) {
    console.log(1)
    console.log(error);
    res.status(404).send(error);
  }
};

// PLATFORMS
const getPlatforms = async function (req, res) {
  try {
    const api = await apiFetch(URL);
    const plat = await platforms(api);
    res.json(plat);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = { getVideoGame, getGame, getGenres, postVideoGames, getPlatforms };
