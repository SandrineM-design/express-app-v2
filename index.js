const express = require("express");

const app = express();

const port = 5000;

const welcome = (req, res) => {
    res.send("Welcome to my favourite movie list");
};


const movies = [
        {
          id: 1,
          title: "Citizen Kane",
          director: "Orson Wells",
          year: "1941",
          color: false,
          duration: 120,
        },
        {
          id: 2,
          title: "The Godfather",
          director: "Francis Ford Coppola",
          year: "1972",
          color: true,
          duration: 180,
        },
        {
          id: 3,
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          year: "1994",
          color: true,
          duration: 180,
        },
      ];


const getMovies = (req, res) => {
  res.status(200).json(movies);
}

app.get("/", welcome);

app.get('/api/movies', getMovies);

app.get('/api/movies/:id', (req, res) => {
  const wantedId =
    parseInt(req.params.id)

  const movie = movies.find(
    (movie) => movie.id === wantedId
  );

  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404).send('Not found');
  }
});


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});