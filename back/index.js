const server = require("./src/services/server");
const connectionDb = require("./src/config/connectionDb");

connectionDb()
  .then((res) => {
    const PORT=3000
    server.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto ${PORT}` ))
  })
  .catch((err) => console.log("Error al conectar a la Base de Datos"));
