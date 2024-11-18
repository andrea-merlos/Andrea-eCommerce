// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

fetch(`heels.json`)
  .then((response) => response.json())
  .then((data) => {
    data.heels.forEach((element) => {
      console.log(element);
      let picture = element["img"];
      let name = element["name"];
      let discription = element["shoe-description"];
      let price = element["shoe price"];

      const heelsCard = document.createElement("div");

      heelsCard.classList.add["heelsView"];
      const html = `
      <div class="heelImages"><img src="${picture}" class="pictures"</div>
      <p class="shoe-name">${name}</p>
      <p class="discription">${discription}</p>
      <p class="shoe-cost">${price}</p>
      <div class="addCart"><button class="addToCart">Buy Now</button></div>`;

      heelsCard.innerHTML = html;
      document.getElementById("heels-container").appendChild(heelsCard);
    });
  });
