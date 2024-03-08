// console.log(tempData);

// const movie = require('../scripts/tempData');

//cards

// Función que crea una tarjeta de película a partir de un objeto movie

function createMovieCard(movie) {
    return `
    <a class="card" href="#">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title} (${movie.year})</h5>
            <p class="card-text">Director: ${movie.director}</p>
            <p class="card-text">Duration: ${movie.duration}</p>
            <p class="card-text">Genre: ${movie.genre.join(", ")}</p>
            <p class="card-text">Rate: ${movie.rate}</p>
        </div>
    </a>`
}

// Obtener el contenedor de las tarjetas de películas del DOM
const container = document.querySelector(".containerCards");
// Añadir al HTML del contenedor la tarjeta de película generada por createMovieCard(movie)
tempData.forEach(movie => {
    container.innerHTML += createMovieCard(movie);
});


// section recomendadas
function createMovieCard2(movie){
    return `
    <a class="card"href="#">
    <img src="${movie.poster}" alt="${movie.title}">
    </a>
    `;
}

// Índices de las películas recomendadas
const recommendedMovieIndexes = [7,2,4];

// Filtrar las películas recomendadas
const recommendedMovies = tempData.filter((movie, index) => recommendedMovieIndexes.includes(index));

const container2 = document.querySelector(".containerFavoriteFilms");
recommendedMovies.forEach(movie => {
    container2.innerHTML += createMovieCard2(movie);
});