const moviesContainer = document.getElementById("containerCards");

const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;
    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = movie.year;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    containerCards.appendChild(card);
  });
};
module.exports=renderCards;
