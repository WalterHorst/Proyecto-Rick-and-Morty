const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.data;
    })
    .then(({ name, gender, species, origin, image, status }) => {
      //destructuring de data
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return res
        .writeHead(200, { "Conten-type": "aplication/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => {
      return res
        .writeHead(200, { "Conten-type": "text/plain" })
        .end(error.message);
    });
};

module.exports = {
  getCharById,
};
