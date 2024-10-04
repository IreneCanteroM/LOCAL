// menu que se encoje y redondea al hacer scroll

const menu = document.getElementById("menu");
const navbarCollapse = document.getElementById("navbarNav");

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
 
    menu.style.borderRadius = scrollY === 0 ? '0' : '900px';

    if (scrollY > 50) { 
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

navbarCollapse.addEventListener('show.bs.collapse', function () {
    menu.style.borderRadius = "30px";
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    menu.style.borderRadius = "900px";
});


// checkbox
const checkbox = document.getElementById("calamares");
const image = document.getElementById("bl-1");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    image.classList.add("red");
  } else {
    image.classList.remove("red");
  }
});


image.addEventListener("click", function() {
  image.classList.toggle("red"); // Añade o quita la clase "red"
});

const checkbox2 = document.getElementById("jamon");
const image2 = document.getElementById("bl-2");

checkbox2.addEventListener("change", function() {
  if (checkbox2.checked) {
    image2.classList.add("yellow");
  } else {
    image2.classList.remove("yellow");
  }
});

const checkbox3 = document.getElementById("churros");
const image3 = document.getElementById("bl-3");

checkbox3.addEventListener("change", function() {
  if (checkbox3.checked) {
    image3.classList.add("green");
  } else {
    image3.classList.remove("green");
  }
});

const checkbox4 = document.getElementById("rastro");
const image4 = document.getElementById("bl-4");

checkbox4.addEventListener("change", function() {
  if (checkbox4.checked) {
    image4.classList.add("blue");
  } else {
    image4.classList.remove("blue");
  }
});

const checkbox5 = document.getElementById("cocido");
const image5 = document.getElementById("bl-5");

checkbox5.addEventListener("change", function() {
  if (checkbox5.checked) {
    image5.classList.add("orange");
  } else {
    image5.classList.remove("orange");
  }
});