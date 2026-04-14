document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("checkout-items");
  const totalElem = document.getElementById("checkout-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
    return;
  }

  // Produkte anzeigen
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    total += product.price * item.quantity;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>${product.name} (${item.options.color}${item.options.size ? ", " + item.options.size : ""}) x ${item.quantity}</p>
    `;
    container.appendChild(div);
  });

  totalElem.textContent = total.toFixed(2) + "€";

  // EmailJS init
  emailjs.init("VshMmpqifJpCjzfnS");

  // Kaufen Button
  document.getElementById("buy-btn").addEventListener("click", () => {

    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const city = document.getElementById("city").value;
    const plz = document.getElementById("plz").value;
    const payment = document.getElementById("payment").value;

    if (!name || !mail || !city || !plz || !payment) {
      showPopup("Bitte alle Felder ausfüllen!")
      return;
    }

    // 🔥 Order ID generieren
    const order_id = Math.floor(Math.random() * 900000) + 100000;

    // 🔥 Produkte als Text
    const orderList = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return "";

      const color = item.options?.color || "keine Farbe";
      const size = item.options?.size ? ", Größe: " + item.options.size : "";

      return `${product.name} (Farbe: ${color}${size}) x ${item.quantity}`;
    }).join("\n");

    // 🔹 1. Mail an dich (Admin)
    emailjs.send("service_reus1uo", "template_d6gedg3", {
      name,
      mail,
      city,
      plz,
      payment,
      order_id,
      orders: orderList,
      total: total.toFixed(2) + "€",
      email: "finn.luedemann@gmx.de"
    });

    // 🔹 2. Bestätigung an Kunden
    emailjs.send("service_reus1uo", "template_r0mvcjg", {
      name,
      email: mail,
      order_id
    });
    alert("Bestellung erfolgreich! 🎉")

    localStorage.removeItem("cart");

    window.location.href = "homepage.html";
  });

});