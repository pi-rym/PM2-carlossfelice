function carousel() {
  return `
    <div class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.pinimg.com/564x/66/04/d0/6604d0f9002ad6245c5762ce5f5db3c6.jpg" class="d-block w-100"
            alt="First slide">
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/564x/9a/06/66/9a066699bfe730e67406cadaacbb98ef.jpg" class="d-block w-100"
            alt="Second slide">
        </div>
        <div class="carousel-item">
          <img src="https://i.pinimg.com/564x/71/01/db/7101dbf9870cc11cdacb2efbb0770b53.jpg" class="d-block w-100"
            alt="Third slide">
        </div>
      </div>
    </div>
    `;
}

const sectionCarousel = document.querySelector(".section-carousel");
sectionCarousel.innerHTML = carousel();


