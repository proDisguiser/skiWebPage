function skiClicked() {
    location.href = "https://www.bergfex.com";
}
function hotelClicked() {
  location.href ="https://www.booking.com";
}
function loginClicked() {
  login.innerHTML = text.value;
}




var pictureSkiing = document.getElementById('ski');
var pictureHotel = document.getElementById('hotel');
var login = document.getElementById('login');
var text = document.getElementById('user');
login.addEventListener("click", loginClicked);
pictureSkiing.addEventListener("click", skiClicked);
pictureHotel.addEventListener("click", hotelClicked);
