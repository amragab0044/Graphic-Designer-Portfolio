// document.getElementById("seeMoreBtn").addEventListener("click", function() {
//   const hiddenCards = document.querySelectorAll(".d-none");
//   const numberToShow = 6;

//   for (let i = 0; i < numberToShow && i < hiddenCards.length; i++) {
//     hiddenCards[i].classList.remove("d-none");
//   }

//   // لو مفيش كروت تاني مخفية، اخفي الزر
//   if (document.querySelectorAll(".d-none").length === 0) {
//     this.classList.add("seeMore-hidden");
//   }
// });

const imgproject = [
  {id: "1", image: ["assets/img/Untitled-buggy.png"]},
  {id: "2", image: ["assets/img/spicy2.jpg"]},
  {id: "3", image: ["assets/img/peniapples-Recovered.jpg"]},
  {id: "4", image: ["assets/img/e5786c216254313.6790f15e8722e.webp"]},
  {id: "5", image: ["assets/img/poster.webp"]},
  {id: "6", image: ["assets/img/poster-2.jpg"]},
  {id: "7", image: ["assets/img/poster-3.jpg"]},
  {id: "8", image: ["assets/img/poster-4.jpg"]},
  {id: "9", image: ["assets/img/chatgpt.jpg", "assets/img/chatgpt-back.webp", "assets/img/chatgpt-front.webp"]},
  {id: "10",image: ["assets/img/christmas.jpg"]},
  {id: "11",image: ["assets/img/bake-today-logo.webp", "assets/img/bake-today-mokup.webp", "assets/img/bake-today-mokup2.webp", "assets/img/bake-today-mokup3.webp", "assets/img/bake-today-mokup4.webp"]},

]

const cardContainer = document.getElementById("cardContainer");
  imgproject.forEach(item => {
    const card = document.createElement("div");
    card.className = "temp";
    card.setAttribute("data-bs-target", `#${item.id}`);
    card.setAttribute("data-bs-toggle", "modal");
    card.innerHTML = `
        <img src= "${item.image[0]}" class="temp-img" loading="lazy">`;
    cardContainer.appendChild(card);
  });


const modalContainer = document.getElementById("modal-container");
  imgproject.forEach(item => {
  const modalDiv = document.createElement("div");
  modalDiv.className = "modal fade";
  modalDiv.id = item.id;
  modalDiv.setAttribute("aria-hidden", "true");
  const imagesHtml = item.image.map(src => `
    <img src="${src}" class="img-fluid" alt="عرض الصورة">`
  ).join("");

  modalDiv.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body text-center p-0">
          ${imagesHtml}
        </div>
      </div>
    </div>`;

  modalContainer.appendChild(modalDiv);
});
   
  

