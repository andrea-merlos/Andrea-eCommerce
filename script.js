fetch(`heels.json`)
  // method of fetch from json file
  .then((response) => response.json())
  // after feching data it creates an arrow function that transforms the response (object)
  .then((data) => {
    // after the data is formated as an object
    data.heels.forEach((element) => {
      //get data from heels and for each element run the next code
      console.log(element);
      let picture = element["img"];
      // variable created to save the dif values from data
      let name = element["name"];
      // variable created to save the dif values from data
      let discription = element["shoe-description"];
      // variable created to save the dif values from data
      let price = element["shoe price"];
      // variable created to save the dif values from data

      const heelsCard = document.createElement("div");
      // creating variable and the creating an HTML div

      heelsCard.classList.add("heelsView");
      // div created is accessing to calss list and adding the new class called heelsView

      //  creating another variable
      const html = `
      <div class="heelImages"><img src="${picture}" class="pictures"</div>
      <p class="shoe-name">${name}</p>
      <p class="discription">${discription}</p>
      <p class="shoe-cost">${price}</p>
      <div class="addCart"><button class="addToCart">Buy Now</button></div>`;

      heelsCard.innerHTML = html;
      // getting div created heelsCard and adding the variable html that i created with my info
      document.getElementById("heels-container").appendChild(heelsCard);
      // getting my element by id heels-container from html and adding as a child the div element created with all my data
    });
  });
