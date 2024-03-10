


const renderCards= require("./renderCards");
const renderRecommendedMovies=require("./renderRecomendedMovies")


$.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
    renderCards(data)
    renderRecommendedMovies(data)
});


