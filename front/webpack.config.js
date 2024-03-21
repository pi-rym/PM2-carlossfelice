module.exports = {
    mode:'development',
  entry: {
    index:"./scripts/index.js",
    films:"./scripts/formulario.js",
    carousel:"./scripts/renderCarousel.js",
    navbar:"./scripts/renderNavBar.js"
},

  output: {
    path: __dirname + "/browser",
    filename: "[name].js",
  },

  
};
