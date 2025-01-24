async function populateStore() {
  let store = document.getElementsByClassName("store")[0];
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();
    for (let i = 0; i < response.length; i++) {
      let card = createCard(
        response[i].id,
        response[i].image,
        response[i].price
      );
      store.appendChild(card);
    }
  } catch (err) {
    console.log(err.message);
  }
}
function createCard(_id, _imageUrl, _price) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  let price = document.createElement("p");
  let id = document.createElement("p");
  image.setAttribute("src", _imageUrl);
  card.setAttribute("class", "card");
  price.setAttribute("class", "price");
  id.setAttribute("class", "id");
  price.innerHTML = "$" + _price;
  id.innerHTML = _id;
  card.appendChild(image);
  card.appendChild(price);
  card.appendChild(id);
  return card;
}
populateStore();