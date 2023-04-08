const { YOUR_API_KEY } = process.env;
let URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;
const { Videogame } = require("../db.js");

//FILTRA LA API
const apiFetch = async function (URL) {
  const myApi = [];
  while (myApi.length <= 90) {
    const api = await fetch(URL);
    const apiReq = await api.json();
    const apiFilt = await apiReq.results.map(function (game) {
      const generes = game.genres.map(function (prop) {
        return { id: prop.id, name: prop.name };
      });
      const platform = game.platforms.map(function (prop) {
        return {
          name: prop.platform.name,
          nameimage_background: prop.platform.image_background,
        };
      });

      const newGame = {
        id: game.id,
        name: game.name.toLowerCase(),
        img: game.background_image,
        rating: game.rating,
        genres: generes,
        platforms: platform,
        released: game.released,
      };
      myApi.push(newGame);
    });

    URL = apiReq.next;
  }

  return myApi;
};

// END POINT UNICO  GAME RENDER

const endPoint = async function (URL2) {
  console.log(URL2)
  const fetchPoint = await fetch(URL2);

  const reqPoint = await fetchPoint?.json()

  const { id , name , description , released, ratings, rating, reactions, playtime, update, background_image, background_image_additional, website, parent_platforms, genres} = reqPoint

  const game = { id , name , released,description , ratings, rating, reactions, playtime, update, background_image, background_image_additional, website, parent_platforms, genres
  }
    

  return game;
};

// FILTRA LOS GENEROS DE MI API SIN REPETIDOS

const genres = async function (api) {
  let genresTotal = [];
 
  for (let game of api) {
    let g = game.genres;

    g.map(function (objeto) {
      let gen = genresTotal.find((elemento) => elemento.id == objeto.id);
      if (gen === undefined) {
        genresTotal.push(objeto);
      }
    });
  }

  return genresTotal;
};

// PLATFORMS
const platforms = async function (api) {
  let platformsTotal = [];
  for (let game of api) {
    let g = game.platforms;

    g.map(function (objeto) {
      let plat = platformsTotal.find((elemento) => elemento == objeto.name);
      if (plat === undefined) {
        platformsTotal.push(objeto.name);
      }
    });
  }

  return platformsTotal;
};

const createPost = async function (req) {
  const { name, img, rating, genres, platforms, release, description } =
    await req;
    
  const gameNew = await Videogame.create(
    {
      name,
      img,
     ratings: rating,
      genre: genres,
      platform: platforms,
      release,
      description,
    },
    {
      include: "genres",
    }
  );
  console.log(genres)
  const gameReq = await gameNew.addGenres(genres.id);

  return gameNew;
};

module.exports = { apiFetch, genres, createPost, platforms, endPoint };
