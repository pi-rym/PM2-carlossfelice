
const renderRecommendedMovies = (data) => {
    const recommendedMovieIndexes = [5,4,6]; 
    // const recommendedMovieIndexes = [0]; 
    const recommendedMovies = data.filter((movie, index) => recommendedMovieIndexes.includes(index));

    const containerFavoriteFilms = document.getElementById('containerFavoriteFilms');
    recommendedMovies.forEach(movie => {
        containerFavoriteFilms.innerHTML += createMovieCard2(movie);
    });
}

// Function to create HTML for a movie card
function createMovieCard2 (movie){
    return `
        <div class="card">
            <img class="card-image" src="${movie.poster}" alt="${movie.title}">
            <h3 class="card-title">${movie.title}</h3>
            <p class="card-text">${movie.year}</p>
        </div>
    `;
}
module.exports=renderRecommendedMovies;