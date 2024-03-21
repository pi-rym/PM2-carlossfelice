
const axios = require("axios");
//fetch data
const fetchMovies = async () => {
  try {
    const response = await axios.get(
      // "https://students-api.up.railway.app/movies"
      "http://localhost:3000/movies"
    );
    const data = response.data;
    return data;

  } catch (err) {
    console.log("Error al obtener películas: ", err.message);
  }
};

module.exports=fetchMovies;
//ruta cd front
//npm run build
//agrege el --watch

//solo aplicar el y hace build e inicia{ npm start }
