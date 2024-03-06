// Función para crear una tarjeta de película
const createMovieCard2 = (movie) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = 
    `
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title} (${movie.year})</h5>
            <p class="card-text">Director: ${movie.director}</p>
            <p class="card-text">Duration: ${movie.duration} mins</p>
            <p class="card-text">Genre: ${movie.genre.join(", ")}</p>
            <p class="card-text">Rate: ${movie.rate}</p>
        </div>
    `;
    return card;
};

// Función para agregar las tarjetas al contenedor en el DOM
const renderMovieCards = (movies) => {
    const container = document.querySelector('.containerCards2');
    container.innerHTML = '';
    movies.forEach(movie => {
        const card = createMovieCard2(movie);
        container.appendChild(card);
    });
};
/*
// Función para obtener y renderizar las películas desde la API
const getAndRenderMovies = () => {
    $.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
        renderMovieCards(data);
    });
};

// Llamar a la función para obtener y renderizar las películas al cargar la página
document.addEventListener('DOMContentLoaded', getAndRenderMovies);
*/
$.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
    renderMovieCards(data);    
});
