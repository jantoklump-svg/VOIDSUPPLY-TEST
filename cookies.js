function CheckCart(){
    const cookiePopup = document.getElementById("cookie-popup");

    if (localStorage.getItem("cookiesAccepted") == "true" ) {
        window.location.href='checkout.html'
    } else  {
        alert("Cookies wurden noch nicht akzeptiert. Akzeptiere die Cookies um fortzufahren.")
        cookiePopup.style.display = "block"
    } return;
}

function showPopup(text) {
  const popup = document.getElementById("custom-popup");
  const popupText = document.getElementById("popup-text");

  popupText.textContent = text;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("custom-popup").style.display = "none";
}