

const renderCards= require("./renderCards");

$.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
    renderCards(data);
});







// section de Películas recomendadas
// Render recommended movies
$.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
    renderRecommendedMovies(data);
});
const renderRecommendedMovies = (data) => {
    const recommendedMovieIndexes = [0]; // Example recommended movie indexes
    const recommendedMovies = data.filter((movie, index) => recommendedMovieIndexes.includes(index));

    const containerFavoriteFilms = document.getElementById('containerFavoriteFilms');
    recommendedMovies.forEach(movie => {
        containerFavoriteFilms.innerHTML += createMovieCard2(movie);
    });
}

// Function to create HTML for a movie card
const createMovieCard2 = (movie) => {
    return `
        <div class="card">
            <img class="card-image" src="${movie.poster}" alt="${movie.title}">
            <h3 class="card-title">${movie.title}</h3>
            <p class="card-text">${movie.year}</p>
        </div>
    `;
}