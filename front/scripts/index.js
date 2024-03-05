console.log(tempData);


//navbar
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.navbar').classList.add('bg-secondary');
    } else {
        document.querySelector('.navbar').classList.remove('bg-secondary');
    }
}

//cards
function createMovieCard(movie) {
    return `
    <div class="card">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
            <h5 class="card-title">${movie.title} (${movie.year})</h5>
            <p class="card-text">Director: ${movie.director}</p>
            <p class="card-text">Duration: ${movie.duration}</p>
            <p class="card-text">Genre: ${movie.genre.join(", ")}</p>
            <p class="card-text">Rate: ${movie.rate}</p>
            <a href="#" class="btnCard">Click</a>
        </div>
    </div>`;
}

// Obtener el contenedor de las tarjetas
const container = document.querySelector(".containerCards");

// Generar las tarjetas de película
tempData.forEach(movie => {
    container.innerHTML += createMovieCard(movie);
});
