//hide search button js
const search = document.querySelector('.search')
const btn1 = document.querySelector('.btn1')
const input = document.querySelector('.input')

btn1.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
//end hide search button js

//shopping cart js
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//end shopping cart js

//slider section js
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//end slider section js

//countdown clock
(function timer() {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  var countDown = new Date("May 20, 2023 15:37:25").getTime(),
      x = setInterval(function() {    

        var now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "Đã hết thời gian khuyến mãi!";
          document.getElementById("countdown").style.display = "none";
          clearInterval(x);
        }
      }, 1000)
}());
//end countdown clock

// geolocation API
var x = document.getElementById("address");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//end geolocation API