const axios=require('axios')

const genres = [
  "Action",
  "Fantasy",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Terror",
  "Adventure",
  "Romance",
];

const btnSubmit = document.getElementById("btnSubmit");
const btnCleaner = document.getElementById("btnCleaner");
const options = document.getElementById("options");
const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

function renderGenres() {
  options.innerText = "";
  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;

    label.htmlFor = genre;
    label.textContent = genre;

    options.appendChild(input);
    options.appendChild(label);
  }
  return options;
}
renderGenres();

function validateCheckboxes() {
  const checkBoxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkBoxes) {
    if (item.checked) {
      item.classList.add("selected");
      return true;
    }
  }
}
validateCheckboxes();

function postFormData(data) {
  console.log(data);

  axios.post('http://localhost:3000/movies', data)
    .then(() => {
      alert("Película enviada con éxito");
    })
    .catch(error => {
      console.error(error);
      alert("Ha ocurrido un error al enviar la película");
    });
}

function handlerSubmmit(event) {
  event.preventDefault();

  const genres = validateCheckboxes();

  if (
    ![
      title.value,
      year.value,
      director.value,
      duration.value,
      rate.value,
      poster.value,
      genres,
    ].every(Boolean)
  ){
    return alert("Faltan llenar campos");
  
  }
  const data = {
    title: title.value.trim(),
    year: year.value.trim(),
    director: director.value.trim(),
    duration: duration.value.trim(),
    rate: rate.value.trim(),
    poster: poster.value.trim(),
    genres: Array.from(document.querySelectorAll('input[name="genre[]"]:checked')).map(input => input.value),
  };
console.log(data);
  postFormData(data);
}


function cleanInputs() {
  title.value = "";
  year.value = "";
  director.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxes = document.querySelectorAll('input[name="genre[]"]');
  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove('selected');
  }
}

btnSubmit.addEventListener("click", handlerSubmmit);
btnCleaner.addEventListener("click", cleanInputs);
