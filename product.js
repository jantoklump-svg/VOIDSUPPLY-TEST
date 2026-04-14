// ---- Warenkorb-Funktionen ----

// Warenkorb anzeigen
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if(cart.length === 0){
    cartItemsContainer.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    const totalElem = document.getElementById("cart-total");
    if(totalElem) totalElem.textContent = "0€";
    return;
  }

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if(!product) return;

    total += product.price * item.quantity;

    const imgSrc = product.images && product.images[item.options.color]
                   ? "../product/" + product.images[item.options.color]
                   : "../product/" + product.image_1;


    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${imgSrc}" alt="${product.name}" class="cart-img" style="width:80px; margin-right:10px; cursor:pointer;">
      <div class="cart-item-details">
        <h3>${product.name} ${product.rabatt ? '<img src="../img/icon/icons8-sale-50-b.png" style="width:20px; vertical-align:middle;">' : ''}</h3>
        <p>Preis: ${product.price}€</p>
        <p>Farbe: ${item.options.color}, Größe: ${item.options.size}</p>
        <p>Menge: <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" data-color="${item.options.color}" data-size="${item.options.size}" class="cart-qty"></p>
      </div>
      <img data-id="${item.id}" data-color="${item.options.color}" data-size="${item.options.size}" class="remove-btn" src="../img/icon/icons8-trash-50.png" alt="${item.id}_imgdel" style="width:35px; height: auto;"></img>
    `;
    cartItemsContainer.appendChild(div);
  });

  const totalElem = document.getElementById("cart-total");
  if(totalElem) totalElem.textContent = total.toFixed(2) + "€";

  // Menge ändern
  document.querySelectorAll(".cart-qty").forEach(input => {
    input.addEventListener("change", e => {
      const id = Number(e.target.dataset.id);
      const color = e.target.dataset.color;
      const size = e.target.dataset.size;
      const qty = Number(e.target.value);
      updateQuantity(id, qty, {color, size});
    });
  });

  // Produkt entfernen
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = Number(e.target.dataset.id);
      const color = e.target.dataset.color;
      const size = e.target.dataset.size;
      clearcart(id, {color, size});
    });
  });

  // Bilder klickbar
  document.querySelectorAll(".cart-img").forEach(img => {
    img.addEventListener("click", () => {
     // let productId = Number(localStorage.getItem("selectedProductId"));
     //  productId = item.id
     // window.location.href="productpage.html"
    });
  });
}

// Menge aktualisieren
function updateQuantity(id, qty, options) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id && i.options.color === options.color && i.options.size === options.size);
  if(item){
    item.quantity = qty;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Produkt entfernen oder alles löschen
function clearcart(productId = null, options = null) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if(productId === null){
    cart = [];
  } else {
    cart = cart.filter(item => {
      if(options) return !(item.id === productId && item.options.color === options.color && item.options.size === options.size);
      else return item.id !== productId;
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Produkt hinzufügen von Produktseite
window.addtocart = function() {
  const productId = Number(localStorage.getItem("selectedProductId"));
  const product = products.find(p => p.id === productId);
  if (product.inStock === true) {

  const quantity = Number(document.getElementById("quantity")?.value || 1);
  const color = document.getElementById("color")?.value || "Standard";
  const sizeElem = document.getElementById("size");
  const size = (sizeElem && sizeElem.style.display !== "none") ? sizeElem.value || "Standard" : "Standard";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingProduct = cart.find(item => item.id === productId && item.options.color === color && item.options.size === size);

  if(existingProduct){
    existingProduct.quantity += quantity;
  } else {
    cart.push({id: product.id, name: product.name, price: product.price, quantity, options:{color,size}});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  showPopup("Produkt zum Warenkorb hinzugefügt!");

  } else {
      showPopup("Produkt ist ausverkauft.")
  } return;
}

// Initial render
renderCart();