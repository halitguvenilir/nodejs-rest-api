const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 1923;

var cities = [
  { name: "Istanbul", country: "Turkey" },
  { name: "New York", country: "USA" },
  { name: "London", country: "England" },
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/cities", function (request, response) {
  response.send(cities);
});

app.post("/api/cities", function (request, response) {
  const city = request.body;
  console.log(city);
  for (let index = 0; index < cities.length; index++) {
    if (cities[index].name === city.name) {
      response
        .status(500)
        .send({ error: "Bu şehir zaten daha önceden eklenmiş!" });
      return;
    }
  }

  cities.push(city);
  response.send(cities);
});

app.listen(port, () => {
  console.log("Port dinleniyor 1923...");
});
