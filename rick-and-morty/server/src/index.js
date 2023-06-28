const http = require("http");
const data = require("./utils/data");

http
  .createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    if (request.url.includes("/rickandmorty/character")) {
      let id = request.url.split("/").at(-1);

      const characterFound = data.find((character) => {
        return character.id === Number(id);
      });

      response
        .writeHead(200, { "Conten-type": "aplication/json" })
        .end(JSON.stringify(characterFound));
    }
  })
  .listen(3001);
