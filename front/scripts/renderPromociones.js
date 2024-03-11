function promociones(){
    return `
    
    
<div class="container">
<h2 class="section-title">¡Aprovecha nuestras promociones!</h2>
<div class="promociones-grid">
  <div class="promocion">
    <img src="https://i.pinimg.com/564x/9f/05/2a/9f052aeaaae3e0a2c07425d99a5cc9ef.jpg" alt="Promoción 1"
      class="promocion-img">
    <h3 class="promocion-title">Descuento en Combo de Palomitas y Refresco</h3>
    <p class="promocion-description">Compra un combo de palomitas y refresco y obtén un 20% de descuento.</p>
  </div>
  <div class="promocion">
    <img src="https://i.pinimg.com/564x/92/70/11/92701158468cddca162421f1588fda72.jpg" alt="Promoción 2"
      class="promocion-img">
    <h3 class="promocion-title">2x1 en Entradas los Martes</h3>
    <p class="promocion-description">Ven los martes y disfruta de nuestras películas con la promoción 2x1 en
      entradas.</p>
  </div>
  <div class="promocion">
    <img src="https://i.pinimg.com/564x/42/db/77/42db77ca69c021e1af07caac9f159b2a.jpg" alt="Promoción 3"
      class="promocion-img">
    <h3 class="promocion-title">Estreno Exclusivo con Descuento</h3>
    <p class="promocion-description">Obtén un descuento especial en el estreno exclusivo de la semana presentando
      tu boleto de cine.</p>
  </div>

  <div class="promocion">
    <img src="https://i.pinimg.com/564x/f5/e3/91/f5e3914ed16efc0595f21621c6c2f98a.jpg" alt="Promoción 4" class="promocion-img">
    <h3 class="promocion-title">Descuento en Combo Familiar</h3>
    <p class="promocion-description">Disfruta de un 20% de descuento en nuestro combo familiar que incluye
      palomitas, bebidas y snacks para toda la familia.</p>
  </div>

</div>
</div>
    `
}
const sectionPromociones = document.querySelector(".section-promociones");
sectionPromociones.innerHTML=promociones()
module.exports=promociones;
