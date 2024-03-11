
/*
movie:{title,year,director,duration,genre,rate,poster,description}
*/
const moviesContainer = document.getElementById("containerCards");

function renderCards (data){
  data.forEach((movie) => {
    //div card
    const card = document.createElement("div");
    card.classList.add("card");
    //div card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //card-image
    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;
    //card-title
    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;
    //card-text
    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = movie.year;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    containerCards.appendChild(card);
  });
};

module.exports = renderCards;
