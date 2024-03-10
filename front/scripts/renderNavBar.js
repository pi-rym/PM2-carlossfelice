const promociones = require("./renderPromociones");

const navbar=()=>{
    return`
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
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            <a class="nav-link" href="./pages/peliculas.html">Peliculas</a>
            <a class="nav-link" href="./pages/series.html">Series</a>
            <a class="nav-link" href="./pages/generos.html">Generos</a>
            <a class="nav-link" href="./pages/sobreNosotros.html">SobreNosotros</a>
          </div>
        </div>
      </div>
    </nav>
    `
}
const sectionNavbar=document.querySelector(".section-navBar");
sectionNavbar.innerHTML=navbar()
module.exports=navbar;