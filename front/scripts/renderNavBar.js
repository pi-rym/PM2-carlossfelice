

function navbar(links) {
  if (!Array.isArray(links)) {
    console.error("La variable 'links' debe ser un array.");
    return "";
  }

  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand me-auto" href="#">CinemaMaster</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <!-- Icon de hamburguesa de Font Awesome -->
            <i class="fas fa-bars"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            ${links.map(link => `<a class="nav-link" href="${link.url}">${link.text}</a>`).join('')}
          </div>
        </div>
      </div>
    </nav>
  `;
}

const links = [
  { url: "../index.html", text: "Inicio" },
  { url: "../pages/peliculas.html", text: "Peliculas" },
  { url: "../pages/series.html", text: "Series" },
  { url: "../pages/generos.html", text: "Generos" },
  { url: "../pages/sobreNosotros.html", text: "SobreNosotros" }
];

const sectionNavbar = document.querySelector(".section-navBar");
sectionNavbar.innerHTML = navbar(links);


