/*
movie:{title,year,director,duration,genre,rate,poster,description}
*/

function renderCards(data) {

  const moviesContainer = document.getElementById("containerCards");

  data.forEach((movie) => {
    console.log(movie)
    // div card
    const card = document.createElement("div");
    card.classList.add("card"); // Agrega la clase "card"

    // div card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // card-image
    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;

    // card-title
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    // card-text
    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = `<strong>Año:</strong> ${movie.year}`;

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerHTML = `<strong>Género:</strong> ${movie.genre}`;

    const rate = document.createElement("p");
    rate.classList.add("card-text");
    rate.innerHTML = `<strong>Rate:</strong> ${movie.rate}`;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerHTML = `<strong>Descripción:</strong> ${movie.description}`;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);
    card.appendChild(description);

    moviesContainer.appendChild(card);
  });
}

module.exports = renderCards;

